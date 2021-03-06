class Plasticine {

    /**
     * @param {(Object|Array|String)} template
     * @returns {{transform: (function(this:Plasticine)), validation: (function(this:Plasticine))}}
     */
    constructor(template) {
        this._regex = {
            and     : /\([\w-]+(?:&[\w-]+){1,}\)/,
            or      : /\([\w-]+(?:\|[\w-]+){1,}\)/,
            replace : /\(([\w-|&]+)\)/
        };

        this._store = {
            template: this._templatePreparation(template)
        };

        return {
            transform : this.transform.bind(this),
            validation: this.validation.bind(this)
        };
    }

    /**
     * @param {(Object|Array|String)} source
     * @returns {(Object|Array|String)}
     */
    transform(source) {
        this._store.root = null;
        
        return this._parser(source, this._store.template)
    }

    validation() {
        // @TODO:
    }

    /**
     * @param {(Object|Array|String)} source
     * @param {(Object|Array|String)} template
     * @returns {(Object|Array|String)}
     * @private
     */
    _parser(source, template) {
        let result = null;

        switch(this._type(source)) {
            case 'array':
                result = new Array(source.length);

                for(let i in source) {
                    if(source.hasOwnProperty(i)) {
                        result[i] = this._templateParser(source[i], template);
                    }
                }
                break;
            case 'object':
                result = this._templateParser(source, template);
                break;
            case 'string':
                try {
                    let json = JSON.parse(source);

                    result = JSON.stringify(this._parser(json, template));
                } catch (e) {
                    console.error('[Plasticine._parser] source string is not JSON!');
                }
                break;
        }

        return result;
    }

    _templatePreparation(template) {
        let result = null;

        switch(this._type(template)) {
            case 'array':
            case 'object':
                result = template;
                break;
            case 'string':
                try {
                    result = JSON.parse(template);
                } catch (e) {
                    console.error('[Plasticine._templatePreparation] template string is not JSON!');
                }
                break;
            default:
                console.error('[Plasticine._templatePreparation] template type', this._type(template));
        }

        return result;
    }

    /**
     * @param {Object} source
     * @param {(Object|Array|String)} template
     * @returns {(Object|Array)}
     * @private
     */
    _templateParser(source, template) {
        let result = null;

        switch(this._type(template)) {
            case 'array':
                result = template.map((key, index) => this._templateParser(source, template[index]));
                break;
            case 'object':
                result = {};

                let keys = Object.keys(template);

                for(let i in keys) {
                    if(keys.hasOwnProperty(i)) {
                        result[keys[i]] = this._templateParser(source, template[keys[i]])
                    }
                }
                break;
            case 'string':
                let operators = template.split('.');

                result = this._sourceParser(source, operators);
                break;
            default:
                console.error('[Plasticine._templateParser] template type', this._type(template));
        }

        return result;
    }

    /**
     * @param {(Object|Array)} source
     * @param {Array} operators
     * @returns {(Object|Array)}
     * @private
     */
    _sourceParser(source, operators) {
        let result = null;

        switch(this._type(source)) {
            case 'array':
                result = source.map(item => {
                    return this._sourceParser(item, operators.slice(0));
                });
                break;
            case 'object':
                this._store.root = source;

                result = this._get(source, operators);
                break;
        }

        return result;
    }

    /**
     *
     * @param {(Object|Array)} source
     * @param {Array} operators
     * @returns {Array}
     * @private
     */
    _deep(source, operators) {
        let result = [];

        switch(this._type(source)) {
            case 'array':
                for(let i in source) {
                    if(source.hasOwnProperty(i)) {
                        let _deep = this._deep(source[i], operators);

                        if(_deep.length) {
                            result = [].concat(result, _deep);
                        }
                    }
                }
                break;
            case 'object':
                let _get = this._get(source, operators.slice(0));

                _get && result.push(_get);

                Object.keys(source).forEach(key => {
                    let _deep= this._deep(source[key], operators);

                    if(_deep.length) {
                        result = result.concat(_deep);
                    }
                });
                break;
        }

        return result;
    }

    /**
     * @param {Object} source
     * @param {Array} operators
     * @returns {(Object|Array)}
     * @private
     */
    _get(source, operators) {
        let operator= operators.shift(),
            result  = null;

        switch(operator) {
            case '$':
                result = this._store.root;
                break;
            case '*':
                result = Object.keys(source).map(key => operators.length ? this._get(source[key], operators.splice(0)) : source[key]);

                operators = [];
                break;
            case '':
                result = this._deep(source, operators.slice(0));
                operators = [];
                break;
            default:
                if(this._regex.and.test(operator)) {
                    let subOperators = operator.replace(this._regex.replace, '$1').split('&');

                    result = subOperators.map(key => {
                        let aKey = [key];

                        return this._get(source, operators.length ? aKey.concat(operators) : aKey);
                    });
                } else if(this._regex.or.test(operator)) {
                    let subOperators = operator.replace(this._regex.replace, '$1').split('|');

                    for(let i in subOperators) {
                        if(subOperators.hasOwnProperty(i)) {
                            let aKey = [subOperators[i]],
                                _get = this._get(source, operators.length ? aKey.concat(operators) : aKey);

                            if(_get) {
                                result = _get;
                                break;
                            }
                        }
                    }
                } else {
                    result = source[operator];
                }
        }

        if(operators.length  && result != undefined) {
            result = this._get(result, operators);
        }

        return result;
    }

    /**
     * @param {*} data
     * @returns {String}
     * @private
     */
    _type(data) {
        let _type = typeof data;

        if(_type == 'object' && Array.isArray(data)) {
            _type = 'array';
        }

        return _type;
    }

}

export default Plasticine;

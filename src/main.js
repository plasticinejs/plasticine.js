class Plasticine {

    constructor(source, template) {
        this._store = {
            root : null
        };

        return this._parser(source, template);
    }

    _parser(source, template) {
        return this._templateParser(source, template);
    }

    _templateParser(source, template) {
        let result = null;

        switch(this._type(template)) {
            case 'array':
                result = template.map(key => this._templateParser(source, template[key]));
                break;
            case 'object':
                result = {};

                Object.keys(template).forEach(key => {
                    result[key] = this._templateParser(source, template[key])
                });
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

    _sourceParser(source, operators) {
        let result = null;

        switch(this._type(source)) {
            case 'array':
                result = [];

                //console.log('11', source);
                for(let i in source) {
                    if(source.hasOwnProperty(i)) {
                        this._store.root = source[i];
                        //console.log('22', i);
                        console.log('HERE', this._sourceParser(source[i], operators));
                        //result.push(this._sourceParser(source[i], operators));
                    }
                }
                break;
            case 'object':
                if(this._store.root === null) {
                    this._store.root = source;
                }

                result = this._get(source, operators);
                break;
        }

        return result;
    }

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
                        result = [].concat(result, _deep);
                    }
                });
                break;
        }

        return result;
    }

    _get(source, operators) {
        let operator= operators.shift(),
            result  = null;

        switch(operator) {
            case '$':
                result = this._store.root;
                break;
            case '*':
                result = Object.keys(source).map(key => {
                    return operators.length ? this._get(source[key], operators.splice(0)) : source[key];
                });
                operators = [];
                break;
            case '':
                result = this._deep(source, operators.slice(0));
                operators = [];
                break;
            default:
                result = source[operator];
        }

        if(operators.length && result) {
            result = this._get(result, operators);
        }

        return result;
    }

    _type(data) {
        let _type = typeof data;

        if(_type == 'object' && Array.isArray(data)) {
            _type = 'array';
        }

        return _type;
    }

}

export default Plasticine;

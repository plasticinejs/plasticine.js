class Plasticine {
    
    constructor(data, template = {}) {
        this.result = Array.isArray(data) ? [] : {};

        if(Array.isArray(data)) {
            for(let i in data) {
                this.result[i] = {};
                this._walk(data[i], template, this.result[i]);
            }
        } else {
            this._walk(data, template, this.result);
        }

        return this.result;
    }

    _walk(data, template, result, key) {
        this[`_${this._type(template)}`](data, template, result, key);
    }

    _type(data) {
        let type = typeof data;

        if(type == 'object' && Array.isArray(data)) {
            type = 'array';
        }

        return type;
    }

    _array(data, template, result, key) {
        if(key && !result[key]) {
            result = result[key] = [];
        }

        for(let i in template) {
            this._walk(data, template[i], result, i);
        }
    }

    _object(data, template, result, key) {
        if(key && !result[key]) {
            result = result[key] = {};
        }

        let keys = Object.keys(template);

        for(let i in keys) {
            this._walk(data, template[keys[i]], result, keys[i])
        }

    }

    _string(data, path, result, key) {
        result[key] = this._get(data, path);
    }

    _get(source, template) {
        if(Array.isArray(template)) {
            let key = template.shift();

            if(/\[[\w,\s]+\]/.test(key)) {
                let keys    = key.match(/\[([\w,\s]+)\]/)[1].split(/,\s?/),
                    result  = [];

                for(let i in keys) {
                    let value = this._get(source, keys[i]);

                    value && result.push(value);
                }

                return result;
            } else {
                return template.length ? source[key] ? this._get(source[key], template) : undefined : source[key];
            }
        } else {
            return this._get(source, template.split('.'));
        }
    }
    
}

export default Plasticine;

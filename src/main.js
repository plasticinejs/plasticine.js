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
        let seek = JSONPath.eval(data, path) || [];

        result[key] = seek.length ? seek[0] : null;
    }

}

export default Plasticine;
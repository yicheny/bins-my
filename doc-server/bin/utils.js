
function createUtils(){
    return {
        isTrue(x){
            return x === true;
        },
        isUndefined(x){
            return x === undefined;
        },
        isString(x){
            return typeof x === 'string'
        },
        isObject(x){
            return this.getType(x) === 'Object';
        },
        isFunction(x){
            return typeof x === 'function';
        },
        isEmpty(x){
            if(!Array.isArray(x)) return false;
            return !x.length;
        },
        getType(value) {
            let dataType = Object.prototype.toString.call(value);
            dataType = dataType.slice(8, dataType.length - 1);
            return dataType;
        }
    }
}

exports.utils = createUtils();

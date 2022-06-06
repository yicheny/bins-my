const colors = require("colors/safe");

function createPrint(){
    return {
        info(text){
            console.log(text)
        },
        error(text){
            console.log(colors.red(text))
        }
    }
}

function createUtils(){
    return {
        addZero(n){
            if(n<10) return '00'.concat(n);
            return n<100 ? '0'.concat(n) : n;
        },
        isString(x){
            return typeof x === 'string'
        }
    }
}

exports.utils = createUtils()
exports.SEP = '-'
exports.print = createPrint()
exports.ePath = createEnhancePath()

function createEnhancePath(){
    return {
        getRootPath(){
            return getWinPath(process.cwd());
        },
    }

    function getWinPath(result){
        return result.replace(/\\/g, '/');
    }

    // function getBaseName(){
    //     const s = ePath.getRootPath().split('/')
    //     return s[s.length-1]
    // }
}
const colors = require("colors/safe");

function createPrint() {
    return {
        info(...text) {
            console.log(...text)
        },
        primary(coreInfo, ...normalInfo) {
            console.log(colors.blue(coreInfo), ...normalInfo);
        },
        error(coreInfo, ...normalInfo) {
            console.log(colors.red(coreInfo), ...normalInfo)
        },
        success(coreInfo, ...normalInfo) {
            console.log(colors.green(coreInfo), ...normalInfo)
        }
    }
}

exports.createPrint = createPrint;

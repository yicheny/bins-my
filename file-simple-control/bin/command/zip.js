// const archiver = require('archiver');
const exec = require('child_process').execSync
const {print,ePath} = require('../base')

//TODO 需要解决的问题
//1. 文件名乱码
//2. 动态生成包名
//3. 输出压缩信息
function zip() {
    const order = `bash ${__dirname}/ftar.sh`
    const timer = createTimer(`打包执行中……`)
    const result = exec(order)
    print.info(`打包成功，耗时：${timer.getDiff()}s 输出目录：${ePath.getRootPath()}`)
}

module.exports = zip;

/*
//TODO archiver压缩速度太慢了，难以接受
function zip(){
    const timer = createTimer('压缩进行中……')

    const output = fs.createWriteStream(`${getRootPath()}/${getBaseName()}.zip`);
    const archive = archiver('zip', {
        zlib: { level: -1 }
    });

    archive.on("error",error=>{
        print.error("压缩出错",error)
    })

    output.on('close',()=>{
        timer.stop()
        print.info(`压缩完成，耗时：${timer.getDiff()}秒！`)
    })

    archive.pipe(output);
    getFilterFiles().forEach(filename=>{
        archive.append(fs.createReadStream(`${getRootPath()}/${filename}`), { name: filename });
    })

    archive.finalize();
}
*/

function createTimer(info,interval=1000){
    let t = new Date().getTime();
    print.info(info)
    const timeId = setInterval(()=>{
        print.info(info)
    },interval)

    return {
        getDiff(){
            clearInterval(timeId)
            const c = (new Date()).getTime()
            return (c-t)/1000
        },
        // stop(){
        //     clearInterval(timeId)
        // }
    }
}

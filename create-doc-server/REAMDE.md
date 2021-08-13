
# 需求场景
1. 执行`create-doc-server`命令创建项目【通过命令行交互或配置文件的方式设置必要参数】
   1. 创建项目模板【可通过`cds.config.json`配置对应内容】
   2. 通过`create-doc-json`生成`doc.json`
   3. 下载`npm`包
2. 创建完之后支持的功能
   1. `start` 运行项目
   2. `update-doc` 更新`doc.json`配置【不生成新文件，生成对应配置，通过配置读取对应项目的文档】

# 特性
1. [x] 一键生成项目
2. [x] 一键刷新文档配置，实现页面的热加载和自动生成，无需手动操作
3. [x] 支持指定任意目录的文档内容【可以超越当前项目限定】
4. [x] 支持运行中动态读取文档内容
5. [x] 自动生成路由及其对应菜单
6. [x] 会根据文档自动生成锚点菜单
7. [x] 支持下拉和模糊搜索快速定位文档
8. [ ] 支持代码实例生成，含依赖项配置等内容

# 使用
## 通过`cds.config.json`
```json5
{
  /*projectName: "docServer"*/ //项目名称--移除此API，默认直接在当前目录创建
  docsContext: "./docs",//需要配置对应的文档目录，以便webpack可以在运行中动态读取本地文件
  packageDownload: "yarn",//选择下载npm包的方式，非必选，默认是`yarn`，可设置为`npm`、`cnpm`
  port: 6066,//设置服务运行端口，非必填，默认是6066
  
  /*
  文档更新配置选择1：createDocJsonPath
  作用：读取对应cdj.config.json路径获取配置数据，用于更新doc.json
  参数类型1: { boolean } 如果没有这一项或者这一项是false，则不启动；如果是true，则默认./cdj.config.json
  参数类型2：{ string } 会将此字符串作为读取的路径【格式是相对路径，基准点是cds.config.json】
  */
  createDocJsonPath: true,
  
  /*
  文档更新配置选择2：createDocJsonConfig【与createDocJsonPath相斥，选择其中之一】
  具体配置方式请见create-doc-json库的说明文档
  */
  createDocJsonConfig: {
     
  },
}
```

## 通过命令行交互
暂未实现

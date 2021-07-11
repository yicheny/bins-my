[TOC]

# 2.0版本介绍
配置示例，例如`dp.config.json`:
> 配置文件命名和存放位置可自由控制，无特殊要求，推荐放在根目录下
```json
{
  "classify": "ubs",
  "isRecovery": true,
  "scripts": [
    "dp -v",
    "dp -h",
    "dp --test",
    "dp -c=xxx/error.config.json"
  ],
  "errorLogPath": "./",
  "classifyConfig":{
    "ubs": {
      "sourceFile": "./files/otherMain.js",
      "targetFile": "./files/main.js",
      "moduleConfig": [
        {
          "filePath": "./files/children/file.js",
          "replaceModules": [
            {
              "source": "import C from './C';",
              "target": "import C from './testC';"
            },
            {
              "source": "import D from './D';",
              "target": "import D from './testD';"
            }
          ]
        }
      ]
    }
  }
}
```

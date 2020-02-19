# webpack 模块使用
## 1 npm init -y
## 2 npm i -D webpack@3.12.0
## 3 创建模块文件App.js
## 4 创建入口文件main.js
## 5 package.json添加webpack脚本 webpack main.js bundle.js(作用：通过webpack把入口文件main.js打包成输出文件bundle.js)
## 6 创建webpack配置文件 webpack.config.js；复制两份，一份为webpack.dev.config.js(开发)、webpack.prod.config.js(生产)
## 7 entry为入口文件，output为输出文件，watch开启文件监视，修改代码后无需重启直接刷新即生效
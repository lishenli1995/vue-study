# webpack 模块使用
## 1 npm init -y
## 2 npm i
## 3 创建src目录存放源文件
## 创建模块文件App.vue
## 创建style.less
## 创建入口文件main.js,引入style.less
## 4 package.json添加webpack脚本 webpack main.js bundle.js(作用：通过webpack把入口文件main.js打包成输出文件bundle.js)
## 5 创建webpack配置文件 webpack.config.js；复制两份，一份为webpack.dev.config.js(开发)、webpack.prod.config.js(生产)
## 6 entry为入口文件，output为输出文件，watch开启文件监视，修改代码后无需重启直接刷新即生效,module配置相应的loader,plugins配置相应插件
## 7 html-webpack-plugin将template对应的index.html作为参考文件生成相应的输出文件
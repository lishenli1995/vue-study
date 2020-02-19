// 入口文件
import Vue from './vue.js'
import App from './App.js'
// 引入样式文件，通过css-loader解析后，再经过style-loader解析成<style></style>
import './style.css'

new Vue({
    el: '#app',
    template: `<App />`,
    components: {
        App
    }
})
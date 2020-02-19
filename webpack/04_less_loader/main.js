// 入口文件
import Vue from './vue.js'
import App from './App.js'
// 引入less
import './style.less'

new Vue({
    el: '#app',
    template: `<App />`,
    components: {
        App
    }
})
import img from './0.jpeg' // 引入图片，通过url-loader解析

var app = {
    template: `<div>我是一个入口文件
    <br>
    <img :src='img' />
    </div>`,
    data() {
        return {
            img // es6 解构用法
        }
    }
}

export var n1 = 1;

var n2 = 2;

export {n2}

export function add(x, y) {
    return x * y;
}

export default app;
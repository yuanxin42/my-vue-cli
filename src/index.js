let a = [1, 2, 3]
let [b, c, d] = a
console.log(b, c, d)
import Vue from 'vue'
import app from './app.vue'
console.log(app,'app')
//默认 webpack 无法打包 .vue文件 要安装相关的loader  cnpm i vue-loader vue-template-compiler -D
var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    components: {
      'app': app
    },
    render: h => {
      // console.log('监测网络')
      // window.systemOnline && window.systemOnline()
      return h(app)
    }
})
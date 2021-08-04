import Vue from 'vue'
import App from './App'
import moment from './common/moment.min'
// 引入封装的接口api
import { http } from './common/http.js'
// 挂在Vue上，全局可以通过this.$http进行调用
Vue.prototype.$http = http

// 阻止启动生产消息
Vue.config.productionTip = false

App.mpType = 'app'

// 全局挂载使用
Vue.prototype.$moment = moment // 日期格式化插件

const app = new Vue({
    ...App
})
app.$mount()

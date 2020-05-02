import Vue from 'vue'
import App from './App'

//导入公共css
import "./static/icon/iconfont.css"
import "./css/commont.css" 

//全局注册组件
import contents from "components/contents/contents.vue"
Vue.component("contents",contents)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

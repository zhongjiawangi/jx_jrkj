import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/js/flexible.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import Lazyload from './js/lazyload'

// 参数均为可选
Vue.use(Lazyload, {
    scrollDistance: 15, // 距离可视区还有15px时开发加载资源
    defaultImage: require('./assets/loading.png'), // 资源图片未加载前的默认图片（绝对路径）
    errorImage: require('./assets/error.png'), // 资源图片加载失败时要加载的资源（绝对路径）
})

Vue.use(ElementUI)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

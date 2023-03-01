/*
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2022-11-16 18:14:31
 * @LastEditTime: 2023-02-28 15:55:36
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 
 * @FilePath: \jx_jrkj\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/common.css";
import "@/js/flexible.js";
// 引入element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入vant
import Vant from "vant";
import "vant/lib/index.css";
// 引入mixin
import mixin from "./mixin/mixin";

// 引入登录组件
import { LoginBox } from "@/components";

import Lazyload from "./js/lazyload";
import "animate.css";
// 参数均为可选
Vue.use(Lazyload, {
  scrollDistance: 15, // 距离可视区还有15px时开发加载资源
  defaultImage: require("./assets/loading.png"), // 资源图片未加载前的默认图片（绝对路径）
  errorImage: require("./assets/error.png"), // 资源图片加载失败时要加载的资源（绝对路径）
});

Vue.use(ElementUI);

Vue.use(Vant);

Vue.mixin(mixin);

Vue.prototype.$login = LoginBox

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

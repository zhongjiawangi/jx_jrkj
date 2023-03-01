import Vue from 'vue'
import Login from './login.vue'

export const LoginBox = Vue.extend(Login)

const instance = new LoginBox({})
LoginBox.install = () => {
  instance.$mount()
  Vue.nextTick(() => {
    instance.show = true
    console.log(instance.wxlogin);
  })
}

LoginBox.uninstall = () => {
  instance.$destroy()
}
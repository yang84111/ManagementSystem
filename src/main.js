import Vue from 'vue'
// import {Row, Button, Container, Aside, Header, Main} from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/index'
import App from './App.vue'
import "./api/mock.js"

import Cookie from 'js-cookie'
// // 按需引入
// Vue.use(Row)

Vue.use(ElementUI)

Vue.config.productionTip = false

// 前置全局路由守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

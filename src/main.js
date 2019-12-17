// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  message,
  Layout,
  Menu,
  Icon,
  Input,
  Checkbox,
  Button,
  BackTop,
  Avatar,
  Divider
} from 'ant-design-vue'

// 性能优化 按需加载
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(BackTop)
Vue.use(Avatar)
Vue.use(Divider)

Vue.prototype.$message = message
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

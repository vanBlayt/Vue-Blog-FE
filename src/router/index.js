import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 性能优化 路由懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/pages/home/Home')
        },
        {
          path: 'frontEnd',
          name: 'FrontEnd',
          component: () => import('@/pages/frontEnd/FrontEnd')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }
  ]
})

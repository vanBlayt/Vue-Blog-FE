import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 性能优化 路由懒加载
const Home = () => import('@/pages/home/Home')
const FrontEnd = () => import('@/pages/frontEnd/FrontEnd')
const Login = () => import('@/pages/login/Login')
const Forget = () => import('@/pages/forget/Forget')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'frontEnd',
          name: 'FrontEnd',
          component: FrontEnd
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    }
  ]
})

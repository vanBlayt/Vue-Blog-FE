import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 性能优化 路由懒加载
const Blog = () => import('pages/blog/Blog')
const Home = () => import('components/home/Home')
const FrontEnd = () => import('components/frontEnd/FrontEnd')
const BackEnd = () => import('components/backEnd/BackEnd')
const BigData = () => import('components/bigData/BigData')
const Login = () => import('pages/login/Login')
const Forget = () => import('pages/forget/Forget')

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Blog,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: Home
    }, {
      path: 'frontEnd',
      name: FrontEnd,
      component: FrontEnd
    }, {
      path: 'backEnd',
      name: 'BackEnd',
      component: BackEnd
    }, {
      path: 'bigData',
      name: 'BigData',
      component: BigData
    }]
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
  }]
})

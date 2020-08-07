import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home=()=>import('@/views/home')
const Cart=()=>import('@/views/cart')
const Category=()=>import('@/views/category')
const Profile=()=>import('@/views/profile')

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})

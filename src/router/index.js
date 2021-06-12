import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/Home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/profile.vue')
const Shopcart = () => import('views/shopcart/shopcart.vue')
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/category",
      component:Category
    },
    {
      path:"/profile",
      component:Profile
    },
    {
      path:"/shopcate",
      component:Shopcart
    }
  ]
})

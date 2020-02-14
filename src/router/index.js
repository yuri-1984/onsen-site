import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      authRequired:true
    }
  },
  {
    path:'/menu',
    name:'menu',
    component:() => import('../views/Menu.vue')
  },
  {
    path: '/sign-in',
    name: 'signin',
    component:()=> import('../views/Signin.vue')
  },
{
  path:'/join',
  name:'join',
  component:()=> import('../views/Join.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router

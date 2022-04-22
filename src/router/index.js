import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/OrderPage',
    name: 'OrderPage',
    component:() => import('../views/OrderPage.vue')
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component:() => import('../views/AddProduct.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component:() => import('../views/customer.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/login.vue')
  },
  {
    path: '/Singup',
    name: 'Singup',
    component:() => import('../views/Singup.vue')
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component:() => import('../views/ForgotPassword.vue')
  }
  ,
  {
    path: '/viewOrder',
    name: 'viewOrder',
    component:() => import('../views/viewOrder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

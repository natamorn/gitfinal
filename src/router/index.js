import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Product.vue')
  },
  {
    path: '/OrderPage',
    name: 'OrderPage',
    component: () => import('../views/OrderPage.vue')
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/customer.vue')
  },
  {
    path: '/AddCustomer',
    name: 'AddCustomer',
    component: () => import('../views/AddCustomer.vue')
  },
  {
    path: '/customerHistory',
    name: 'customerHistory',
    component: () => import('../views/customerHistory.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/viewOrder',
    name: 'viewOrder',
    component: () => import('../views/viewOrder.vue')
  },
  {
    path: '/NewProductPage',
    name: 'NewProductPage',
    component: () => import('../views/NewProductPage.vue')
  }
]

export default new Router({ base: process.env.BASE_URL, routes })

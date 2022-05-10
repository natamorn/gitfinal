import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
    path: '/AddCustomer',
    name: 'AddCustomer',
    component:() => import('../views/AddCustomer.vue')
  },
  {
    path: '/customerHistory',
    name: 'customerHistory',
    component:() => import('../views/customerHistory.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/login.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
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

import Router from 'vue-router'
import auth from '@/middleware/auth'
import Vue from 'vue'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/Product',
      name: 'Product',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: () => import('../views/OrderPage.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/AddProduct',
      name: 'AddProduct',
      component: () => import('../views/AddProduct.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../views/customer.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/AddCustomer',
      name: 'AddCustomer',
      component: () => import('../views/AddCustomer.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/customerHistory',
      name: 'customerHistory',
      component: () => import('../views/customerHistory.vue'),
      meta: {
        middleware: auth
      }
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
      component: () => import('../views/viewOrder.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/NewProductPage',
      name: 'NewProductPage',
      component: () => import('../views/NewProductPage.vue'),
      meta: {
        middleware: auth
      }
    }
  ]
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory (context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
      store
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})

export default router

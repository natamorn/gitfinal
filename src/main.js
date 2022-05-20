import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './database/firebase'
import vuetify from '@/plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import store from './store'

Vue.use(VueSweetalert2)
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

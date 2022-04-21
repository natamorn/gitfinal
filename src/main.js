import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './database/firebase'

createApp(App).use(router).mount('#app')

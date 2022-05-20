import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {

  theme: {
    themes: {
      light: {
        tableHeader: '#f8d7da'
      }
    }
  }
}

export default new Vuetify(opts)

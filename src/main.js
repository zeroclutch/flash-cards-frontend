import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(fab, fas)
Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      authToken: null
    }
  },
  methods: {
    logout() {
      document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    isLoggedIn() {
      return this.token != undefined && this.token != 'null'
    },
    getRequestOptions(method, body) {
      const options = {
        method,
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          'authorization': this.token
        },
      }
      console.log(options)
      return options
    }
  },
  computed: {
    token() {
      let row = document.cookie.split('; ').find(row => row.startsWith('token'))
      if (row) {
        console.log(row)
          return decodeURIComponent(row.split('=')[1])
      } else {
          return false
      }
    },
  },
  render: function (h) { return h(App) }
}).$mount('#app')

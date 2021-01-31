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
  methods: {
  },
  render: function (h) { return h(App) }
}).$mount('#app')

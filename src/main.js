import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css'
import 'bulma-prefers-dark/css/bulma-prefers-dark.css'

Vue.use(Buefy)

import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

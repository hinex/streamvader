import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import MdToolbar from 'vue-material/dist/components/MdToolbar'
import MdButton from 'vue-material/dist/components/MdButton'
import MdContent from 'vue-material/dist/components/MdContent'
import MdTabs from 'vue-material/dist/components/MdTabs'
import MdSpeedDial from 'vue-material/dist/components/MdSpeedDial'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdSpeedDial)
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

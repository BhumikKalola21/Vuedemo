import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store/index.js'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { BIcon } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '236907195030-5v2selov5v7o22pk4eiu2if6pvgsd0ot.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true,
  plugin_name: 'gmail'
}



Vue.use(GAuth, gauthOption)
Vue.use(BootstrapVue)
Vue.use(router)
Vue.use(IconsPlugin)
Vue.component('b-icon', BIcon)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
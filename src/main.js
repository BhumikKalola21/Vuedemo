import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store/index.js'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { BIcon } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '511458277120-n71rb8if053ge87h4vi29lksdkhm56or.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
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
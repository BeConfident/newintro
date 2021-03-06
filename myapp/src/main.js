
import Vue from 'vue'
import App from './App'
import axios from "axios"
import router from './router'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import axios from 'axios'
import lodash from 'lodash'

Vue.prototype.$http = axios
Vue.prototype._ = lodash
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',

  data: {
  },
  template: '<App/>',
  components: {
    App
  },

})

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

require('@/assets/vendors/bootstrap/bootstrap.min.css')
require('@/assets/vendors/fontawesome/css/all.min.css')
require('@/assets/vendors/themify-icons/themify-icons.css')
require('@/assets/vendors/nice-select/nice-select.css')
require('@/assets/vendors/owl-carousel/owl.theme.default.min.css')
require('@/assets/vendors/owl-carousel/owl.carousel.min.css')
require('@/assets/css/style.css')
require('@/assets/vendors/jquery/jquery-3.2.1.min.js')
require('@/assets/vendors/bootstrap/bootstrap.bundle.min.js')
require('@/assets/vendors/skrollr.min.js')
require('axios')

// require('@/assets/vendors/owl-carousel/owl.carousel.min.js')
// require('@/assets/vendors/nice-select/jquery.nice-select.min.js')
// require('@/assets/vendors/jquery.ajaxchimp.min.js')
// require('@/assets/vendors/mail-script.js')
// require('@/assets/js/main.js')

Vue.config.productionTip = false

// Installing BootstrapVue
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

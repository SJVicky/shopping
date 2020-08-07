import Vue from 'vue'
import App from './App'
import router from './router'
import toast from './components/common/toast/index'

Vue.config.productionTip = false
Vue.use(toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

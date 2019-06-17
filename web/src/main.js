import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Header from './components/Header.vue'

Vue.config.productionTip = false
Vue.component('vheader',Header);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

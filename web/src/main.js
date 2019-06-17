import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import Header from './components/Header.vue'

Vue.config.productionTip = false

Vue.component('vheader',Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Header from './components/Header.vue'
import lbody from './components/lBody.vue'

Vue.config.productionTip = false
Vue.component('vheader',Header);
Vue.component('lbody',lbody);//注册成为全局组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

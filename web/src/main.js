import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Shangjia from './components/Shangjia.vue'
import Dibu from './components/Dibu.vue'
import Header from './components/Header.vue'
import Biaoqian from './components/Biaoqian.vue'
import Shop from './components/Shopping.vue'
 
// Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.component('vheader',Header);
Vue.component('shop',Shop);
Vue.component('biaoqian',Biaoqian);
Vue.component('shangjia',Shangjia);
Vue.component('dibu',Dibu);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

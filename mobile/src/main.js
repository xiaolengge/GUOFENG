import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mheader from './components/mheader.vue'
import Tabbar from './components/Tabbar.vue'
import xiangqin from './components/xiangqin.vue'
import  './plugins/mint.js';

import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);


Vue.config.productionTip = false
Vue.component('mheader',mheader);
Vue.component('Tabbar',Tabbar);
Vue.component('xiangqin',xiangqin);
router.beforeEach((to,form,next)=>{
	//获取用户 登录成功后储存的登录标志
	let getFlag = localStorage.getItem("Flag");
	//如果登录标志存在且为isLogin，即为用户以登录
	if(getFlag == "isLogin"){
		//设置vuex登录状态为已登录
		store.state.isLogin = true
		next()
	}else{
		//如果用户进入需要登录界面，则定向返回登录界面
		if(to.meta.isLogin){
			next({
				path:'/login'
			})
			//提示
			alert('请先登录')
			//进入无需登录的界面，则继续跳转 
		}else{
			next()
		}
	}
});
router.afterEach(router => {
	window.scroll(0,0);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

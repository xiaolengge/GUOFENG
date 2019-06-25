import Vue from 'vue';
import Router from 'vue-router';
import Mint from 'mint-ui';
import index from './components/index.vue'
import huiyuan from './components/huiyuan.vue'
import dingdan from './components/dingdan.vue'
Vue.use(Mint);


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
		path:'/',
		name:'index',
		component:index
		},
		{
		path:'/index',
		name:'index',
		component:index
		},
		{
		path:'/huiyuan',
		name:'huiyuan',
		component:huiyuan
		},
			{
		path:'/dingdan',
		name:'dingdan',
		component:dingdan
		},
  ]
})

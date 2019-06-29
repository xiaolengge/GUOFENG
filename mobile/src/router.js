import Vue from 'vue';
import Router from 'vue-router';
import Mint from 'mint-ui';
import index from './components/index.vue'
import huiyuan from './components/huiyuan.vue'
import dingdan from './components/dingdan.vue'
import wode from './components/wode.vue'
import shezhi from './components/shezhi.vue'
import tijiaoddan from './components/tijiaoddan.vue'
import zhifu from './components/zhifu.vue'
import chenggong from './components/chenggong.vue'

import goods from './components/Xgoods.vue'
import login from './components/Xlogin.1.vue'
import register from './components/Xregister.vue'


import gerenxxi from './components/gerenxxi.vue'

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
		path:'/goods',
		name:'goods',
		component:goods
		
		},
		{
		path:'/login',
		name:'login',
		component:login
		
		},
		{
		path:'/register',
		name:'register',
		component:register
		
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
		{
		path:'/wode',
		name:'wode',
		component:wode
		},
		{
		path:'/shezhi',
		name:'shezhi',
		component:shezhi
		},
		{
		path:'/tijiaoddan',
		component:tijiaoddan,
	
		},
		{
		path:'/zhifu',
		name:'zhifu',
		component:zhifu
		},
		{
		path:'/chenggong',
		name:'chenggong',
		component:chenggong
		},
		{
		path:'/gerenxxi',
		name:'gerenxxi',
		component:gerenxxi
		},
		
		
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import dingdan from './components/dingdan.vue'

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
		path:'/dingdan',
		name:'dingdan',
		component:dingdan
		}	
  ]
})

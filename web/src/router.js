import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import dingdan from './components/dingdan.vue'
import jiameng from './components/jiameng.vue'
import lbody from './components/lBody.vue'
import lsp from './components/lxx/lsp.vue'
import l_sp from './components/lxx/l_sp.vue'
import Jies from './components/jiesuan.vue'
import Person from './components/Xperson.vue'
import Login from './components/Xlogin.vue'
import Register from './components/Xregister.vue'

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
		},
		{
		path:'/jiameng',
		name:'jiameng',
		component:jiameng
		},
		{
		path:'/jiesuan',
		name:'jiesuan',
		component:Jies
		},
		
		
		{
		path:'/person',
		name:'person',
		component:Person
		},
		{
		path:'/register',
		name:'register',
		component:Register
		},
		{
		path:'/login',
		name:'login',
		component:Login
		},
		
		
		
		{
		  path: '/lbody',
		  name: 'lbody',
		  component: lbody,
			children:[
				{
					path:'/lsp',
					name:'lsp',
					component:lsp,
					},
					{
						path:'/l_sp',
						name:'l_sp',
						component:l_sp,
						},
			]
			},
			// {
			//   path: '*',
			//   redirect:'/lbody'
			// },
  ]
})

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
import hezuo from './components/hezuo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
		path:'/',
		name:'index',
		component:index,
		meta:{
			isLogin:false,
		}
		},
		{
		path:'/index',
		name:'index',
		component:index,
		meta:{
			isLogin:false,
		}
		},	
		{
			path:'/dingdan',
			name:'dingdan',
			component:dingdan,
// 			meta:{
// 				isLogin:true,
// 			}
		},
		{
		path:'/jiameng',
		name:'jiameng',
		component:jiameng,
		// meta:{
		// 	isLogin:false,
		// }
		},
		{
		path:'/jiesuan',
		name:'jiesuan',
		component:Jies,
		meta:{
			isLogin:true,
		}
		},
		{
		path:'/hezuo',
		name:'hezuo',
		component:hezuo,
// 		meta:{
// 			isLogin:true,
// 		}
		},
		
		{
		path:'/person',
		name:'person',
		component:Person,
		meta:{
			isLogin:false,
		}
		},
		{
		path:'/register',
		name:'register',
		component:Register,
		meta:{
			isLogin:false,
		}
		},
		{
		path:'/login',
		name:'login',
		component:Login,
		meta:{
			isLogin:false,
		},
		
		},
		{
		  path: '/lbody',
		  name: 'lbody',
		  component: lbody,
		  meta:{
		  	isLogin:false,
		  },
			children:[
				{
					path:'/lsp',
					name:'lsp',
					component:lsp,
					meta:{
						isLogin:true,
					}
					},
					{
						path:'/l_sp',
						name:'l_sp',
						component:l_sp,
						meta:{
							isLogin:true,
						}
						},
			]
			},
			{
			  path: '*',
			  redirect:'/index'
			},
  ]
})

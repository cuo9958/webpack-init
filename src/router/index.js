import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const routes = [
	{
		path: '/',
		component: login
	},

	{
		path: '/home',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		}]
	},
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
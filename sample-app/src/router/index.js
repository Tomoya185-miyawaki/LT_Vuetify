import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Member from '@/components/member_form'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/signin',
			name: 'Signin',
			component: Signin
		},
		{
			path: '/',
			name: 'Member',
			component: Member
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup
		}
	]
})
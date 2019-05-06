import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Member from '@/components/member_form'
import Edit from '@/components/Edit'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
	mode: 'history',
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
		},
		{
			path: '/edit',
			name: 'Edit',
			component: Edit
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
	]
})
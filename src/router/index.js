import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
// import Pages from '../components/layout/PagesTemplate';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	// linkActiveClass: 'is-active',
	// linkExactActiveClass: 'is-active',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('../views/About.vue'),
		},
		//!-- Nested Router Example
		//    'Pages' 컴포넌트에서 <router-view> 를 사용했을 경우
		//   --------------------------------------------------
		// {
		// 	path: '/about',
		// 	name: 'About',
		// 	component: Pages,
		// 	children: [
		// 		{ path: '', component: () => import('../views/About.vue') },
		// 	],
		// },
		{
			path: '/todo',
			name: 'ToDo',
			component: () => import('../views/Todo.vue'),
		},
		{
			path: '/code-sample',
			name: 'CodeSample',
			component: () => import('../views/CodeSample.vue'),
		},
		{
			path: '*',
			component: () => import('../views/ErrorPage404.vue')
		},
	],
});

export default router;

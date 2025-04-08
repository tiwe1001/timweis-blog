import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '@/views/HomeView.vue';
import { useUserStore } from '@/store/user';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'login',
    component: WelcomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
	const userStore = useUserStore();

	if (to.meta.requiresAuth && !userStore.accessToken) {
		next({ path: '/' });
	} else {
		next();
	}
});

export default router;

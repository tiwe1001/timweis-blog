import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '@/views/HomeView.vue';
import { useUserStore } from '@/store/user';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    meta: { title: 'Welcome | T' }
  },
  {
    path: '/login',
    name: 'login',
    component: WelcomeView,
    meta: { title: 'Login | T' }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, title: 'Home | T' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

router.beforeEach((to, from, next) => {
	const userStore = useUserStore();

	if (to.meta.requiresAuth && !userStore.accessToken) {
		next({ path: '/' });
	} else {
		next();
	}
});

export default router;

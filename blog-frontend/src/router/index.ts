import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

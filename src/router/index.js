import AppMain from '@/components/AppMain.vue'
import ProfileMain from '@/components/ProfileMain.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: AppMain },
    { path: '/profile', component: ProfileMain }
  ]
})

export default router

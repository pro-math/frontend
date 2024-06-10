import { useCurrentUserStore } from '@/stores/current_user_store'
import AppMain from '@/views/AppMain.vue'
import ProfileMain from '@/views/ProfileMain.vue'
import OverallRatingMain from '@/views/OverallRatingMain.vue'
import AboutUs from '@/views/AboutUs.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: AppMain },
    {
      path: '/profile',
      component: ProfileMain,
      beforeEnter: (to, from, next) => {
        const store = useCurrentUserStore()
        if (!store.isLogged) {
          next('/')
        } else {
          next()
        }
      }
    },
    { path: '/rating', component: OverallRatingMain },
    { path: '/about-us', component: AboutUs }
  ]
})

export default router

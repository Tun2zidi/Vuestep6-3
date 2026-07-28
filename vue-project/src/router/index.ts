import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserDetailView from '@/views/UserDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users/:id',
      name: 'user-detail-view',
      component: UserDetailView,
      props: true
    }
  ]
})

export default router
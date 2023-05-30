import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "@/views/AccueilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: AccueilView
    }
  ]
})

export default router

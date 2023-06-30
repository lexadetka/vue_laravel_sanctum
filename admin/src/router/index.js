import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('../views/admin/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register.vue')
    }
  ]
})

export default router

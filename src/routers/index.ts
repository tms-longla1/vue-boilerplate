import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/guards/AuthGuard.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/layouts/index.vue'),
          children: [
            {
              path: '/login',
              name: 'login',
              meta: {
                layout: 'UnAuth'
              },
              component: () => import('@/pages/Login/index.vue')
            },
            {
              path: '/',
              name: 'top',
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/Top/index.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router

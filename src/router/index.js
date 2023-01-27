import { createRouter, createWebHistory } from 'vue-router'
import DashBoard1 from '../views/DashBoard1.vue'
import DashBoard2 from '../views/DashBoard2.vue'
import DashBoard3 from '../views/DashBoard3.vue'
import CreateView from '../views/pages/CreateView.vue'
import ContentRouter from '../views/pages/ContentRouter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard1',
      component: DashBoard1,
      children: [
        {
          path: 'contentRoute',
          name: 'contentRoute',
          component: ContentRouter
        }
      ]
    },
    {
      path: '/dashboard2',
      name: 'dashboard2',
      component: DashBoard2
    },
    {
      path: '/dashboard3',
      name: 'dashboard3',
      component: DashBoard3
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router

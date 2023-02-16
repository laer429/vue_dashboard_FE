import { createRouter, createWebHistory } from 'vue-router'
import DashBoard1 from '../views/DashBoard1.vue'
import DashBoard2 from '../views/DashBoard2.vue'
import DashBoard3 from '../views/DashBoard3.vue'
import CreateView from '../views/pages/CreateView.vue'
import ContentPage from '../views/pages/ContentPage.vue'
import ModifyPage from '../views/pages/ModifyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard1',
      component: DashBoard1,
      // 컴포넌트 속 컴포넌트
      // children: [
      //   {
      //     path: 'contentpage',
      //     name: 'contentpage',
      //     component: ContentPages
      //   }
      // ]
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
      path: '/create/:page_id',
      name: 'create',
      component: CreateView
      
    },
    {
      path: '/:content_id',
      name: 'contentpages',
      component: ContentPage
    },
    {
      path: '/ModifyPage/:id',
      name: 'ModifyPage',
      component: ModifyPage
    }
  ]
})

export default router

import { ROUTER_NAMES, ROUTER_URLS } from '@/core/enums/router';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_URLS.PACKAGE_TABLE,
      name: ROUTER_NAMES.PACKAGE_TABLE,
      component: () => import('../view/MainTable/MainTable.vue'),
    },
    {path: '/', redirect: ROUTER_URLS.PACKAGE_TABLE},
  ],
})

export default router

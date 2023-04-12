import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from '@/routers/modules/staticRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
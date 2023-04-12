import { LOGIN_URL } from "@/config/config";
import { RouteRecordRaw } from "vue-router";

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: LOGIN_URL
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录页"
    }
  }
]
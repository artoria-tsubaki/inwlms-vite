import { Login } from "../interface"
import http from "@/api"

/**
 * @description 登录模块
 * @param params 表单参数
 * @returns 
 */
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/login`, params, { headers: { noLoading: true } })
}
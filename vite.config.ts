import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { wrapperEnv } from "./src/utils/getEnv";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  return {
    base: './',
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      // 服务器主机名， 如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // 跨域代理配置
      // proxy: {
      //   "/api": {
      //     target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e",
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, "")
      //   }
      // }
    },
    plugins: [
      vue(),
      // * 支持使用unocss
      unocss(),
      // * name 可以写在 script 标签上
      VueSetupExtend()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // 在所有scss文件中自动导入一个全局文件
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    }
  }
})

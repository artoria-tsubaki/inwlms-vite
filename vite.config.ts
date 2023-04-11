import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { wrapperEnv } from "./src/utils/getEnv";

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
    plugins: [vue(), unocss()],
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

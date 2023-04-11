import { createApp } from 'vue'

/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind.css'
/** 
 *项目内的样式，
 *注意：最好放在重置样式后，uno.css前
 */
 import './style.css'
 /** 引入uno.css，不引入不生效 */
 import 'virtual:uno.css'
import App from './App.vue'

/* element plus */
import ElementPlus from 'element-plus'
// element icons
import * as Icons from '@element-plus/icons-vue'
// element css
import 'element-plus/dist/index.css'

/* vue Router */
import router from '@/routers'

/* pinia */
import { setupStore } from '@/stores/index'

const app = createApp(App)

// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

// 挂载store
setupStore(app)
app.use(router).use(ElementPlus)

app.mount('#app')

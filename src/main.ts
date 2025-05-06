import '@/assets/styles/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  }
})

app.mount('#app')

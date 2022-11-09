import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/GlobalStyles.css'

createApp(App).use(router).mount('#app')

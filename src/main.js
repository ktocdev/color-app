import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
]

// Create router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import themeManager from './utils/themeManager.js'

// Initialize theme system
themeManager.loadTheme(themeManager.getSavedTheme())

// Define routes
const routes = [
  { path: '/', component: Home },
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the app
const app = createApp(App)
app.use(router)

// Make theme manager available globally
app.config.globalProperties.$themeManager = themeManager

app.mount('#app')
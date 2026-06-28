import { createApp } from 'vue'
import App from './App.vue'
import { preloadCriticalAssets } from './utils/preloadAssets'
import './styles/variables.css'
import './styles/main.css'

preloadCriticalAssets()

createApp(App).mount('#app')

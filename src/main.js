import { createApp } from 'vue'
import App from './App.vue'
import { preloadAllAssets } from './utils/preloadAssets'
import './styles/variables.css'
import './styles/main.css'

preloadAllAssets()

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, storeKey } from './store/index'
//import './models/save-state'

createApp(App).use(store, storeKey).use(router).mount('#app')

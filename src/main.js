import './assets/input.css'
import './assets/tailwind.min.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)
const vfm = createVfm()

app.use(pinia)
app.use(vfm).mount('#app')
import './assets/input.css'
import './assets/tailwind.min.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as IconsFa from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './axios'


//Se agrega los iconos de fontawesome
library.add(IconsFa.faAngleDown)

const pinia = createPinia()
const app = createApp(App)
const vfm = createVfm()
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(vfm).mount('#app')
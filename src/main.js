import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'

import './assets/css/styles.css'
import './assets/css/datatables.css'
import './assets/js/scripts.js'
import './assets/js/all.min.js' 
import './assets/js/datatables-simple-demo.js'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

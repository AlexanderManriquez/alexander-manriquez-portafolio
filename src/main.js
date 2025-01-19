import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';

const app = createApp(App)

import '../src/input.css'

app.use(router)

app.mount('#app')

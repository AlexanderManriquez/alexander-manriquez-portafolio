import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import { Tooltip } from 'flowbite';

const app = createApp(App)

import '../src/input.css'

app.use(router)

app.mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip-target]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
  })

import { createApp } from 'vue'
import App from './App.vue'
import L from 'leaflet'
import router from './router'
import './assets/styles/home.css'

// Override icon default Leaflet — berlaku untuk seluruh app
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
})

createApp(App).use(router).mount('#app')
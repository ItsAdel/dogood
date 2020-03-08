import Welcome from './components/Welcome.vue'
import Home from './components/Home.vue'
import Kindness from './components/Kindness.vue'

export const routes = [
    { path: '/', component: Welcome },
    { path: '/home', component: Home },
    { path: '/actsofkindness', component: Kindness },
]
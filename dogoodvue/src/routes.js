import Welcome from './components/Welcome.vue'
import Home from './components/Home.vue'
import Kindness from './components/Kindness.vue'
import FightForCause from './components/FightForCause.vue'
import Volunteer from './components/Volunteer.vue'
import Calendar from './components/Calendar.vue'
import Donate from './components/Donate.vue'
import ContactRep from './components/ContactRep.vue'

export const routes = [
    { path: '/', component: Welcome },
    { path: '/home', component: Home },
    { path: '/actsofkindness', component: Kindness },
    { path: '/fightforcause', component: FightForCause },
    { path: '/volunteer', component: Volunteer},
    { path: '/calendar', component: Calendar},
    { path: '/donate', component: Donate},
    { path: '/contactrep', component: ContactRep}
]

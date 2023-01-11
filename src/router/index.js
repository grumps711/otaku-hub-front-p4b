import { createRouter, createWebHashHistory } from 'vue-router'
import search from '../components/search.vue'
import trivial from '../views/trivialview.vue'
import home from '../views/homeview.vue'
import animeresults from '../views/animeresultsview.vue'
import narutodetails from '../components/narutodetails.vue'
import animedetails from '../views/animedetails.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'


const routes = [
 
  {
    path: '/search',
    name: 'search',
    component: search
  },



  {
    path: '/trivial',
    name: 'trivial',
    component: trivial
  },

  {
    path: '/home',
    name: 'home',
    component: home
  },

  {
    path: '/animeresults',
    name: 'animeresults',
    component: animeresults
  },

  {
    path: '/narutodetails',
    name: 'narutodetails',
    component: narutodetails
  },

  {
    path: '/animedetails/:animeid',
    name: 'animedetails',
    component: animedetails
  },

  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import search from '../components/Search.vue'
import trivial from '../views/TrivialView.vue'
import home from '../views/HomeView.vue'
import animeresults from '../views/AnimeResultsView.vue'
import narutodetails from '../components/NarutoDetails.vue'


const routes = [
 
  {
    path: '/search',
    name: 'Search',
    component: search
  },

  {
    path: '/trivial',
    name: 'Trivial',
    component: trivial
  },

  {
    path: '/home',
    name: 'home',
    component: home
  },

  {
    path: '/animeresults',
    name: 'AnimeResults',
    component: animeresults
  },

  {
    path: '/narutodetails',
    name: 'NarutoDetails',
    component: narutodetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

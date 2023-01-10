import { createRouter, createWebHashHistory } from 'vue-router'
import search from '../components/Search.vue'
import trivial from '../views/TrivialView.vue'
import home from '../views/HomeView.vue'
import animeresults from '../views/AnimeResultsView.vue'
import narutodetails from '../components/NarutoDetails.vue'
import animedetails from '../views/AnimeDetails.vue'


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
  },

  {
    path: '/animedetails/:animeid',
    name: 'animedetails',
    component: animedetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

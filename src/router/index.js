import { createRouter, createWebHashHistory } from 'vue-router'
import search from '../components/search.vue'
import trivial from '../components/trivial.vue'
import homeview from '../views/homeview.vue'


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
    path: '/homeview',
    name: 'Home View',
    component: homeview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

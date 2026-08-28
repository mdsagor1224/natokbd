import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const NatokDetails = () => import('../views/NatokDetails.vue')
const Search = () => import('../views/Search.vue')
const Category = () => import('../views/Category.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/natok/:slug', name: 'natok-details', component: NatokDetails, props: true },
  { path: '/search', name: 'search', component: Search },
  { path: '/category/:category', name: 'category', component: Category, props: true },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router

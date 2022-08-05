import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import varAndConst from '../components/varAndConst.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/varAndConst',
    name: 'varAndConst',
    component: varAndConst,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

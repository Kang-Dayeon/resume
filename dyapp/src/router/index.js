import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: () => import('../views/CareerView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/stacks',
    name: 'stacks',
    component: () => import('../views/StacksView.vue')
  },
  {
    path: '/educationLang',
    name: 'educationLang',
    component: () => import('../views/EducationLangView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

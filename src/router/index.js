import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About => import('../views/About.vue')
  },
  {
    path: '/learnmore/:id',
    name: 'learnmore',
    component: Learnmore => import('../views/Learmore.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact => import(/* webpackChunkName: "contactpagejs" */ '../views/Contact')
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: Volunteer => import(/* webpackChunkName: "volunteer" */ '../views/Volunteer')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

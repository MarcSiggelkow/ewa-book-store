import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'
import Shop from '../views/ShopView.vue'
import Checkout from '../views/CheckoutView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'
import Shop from '../views/ShopView.vue'
import Checkout from '../views/CheckoutView.vue'
import AboutUs from '../views/AboutView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ewa/g09/beleg//',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ewa/g09/beleg//about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/ewa/g09/beleg//contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/ewa/g09/beleg//shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/ewa/g09/beleg//checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ewa/g09/beleg//:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

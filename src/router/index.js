import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Study from '../views/Study.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    props: true
  },
  {
    path: '/study',
    name: 'Study',
    component: Study,
  },
  {
    path: '/study/:set',
    name: 'Study',
    component: Study,
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Services from '../views/Services.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

import { logout } from './logout.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/logout',
      name: 'Logout',
      meta: { requiresAuth: true }, // Annahme: Sicherstellen, dass der Benutzer angemeldet ist
      beforeEnter: (to, from, next) => {
        logout(); // Aufruf der logout-Funktion aus logout.js
        next('/login');
      }
    }
  ]
})

export default router


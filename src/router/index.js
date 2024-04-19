import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Services from '../views/Services.vue'
import ServicesAPIDevelopment from '../views/APIDevelopment.vue'
import ServicesWebDevelopment from '../views/WebDevelopment.vue'
import ServicesAppDevelopment from '../views/AppDevelopment.vue'
import ServicesUIUXDesign from '../views/UIUXDesign.vue'
import ServicesGraphicDesign from '../views/GraphicDesign.vue'
import Team from '../views/Team.vue'
import About from '../views/About.vue'
import AboutProjects from '../views/Projects.vue'
import AboutTeams from '../views/Teams.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { logout } from './logout.js';
import Profile from '../views/Profile.vue'
import ProfileFollowerList from '../views/FollowerList.vue'
import ProfileContactList from '../views/ContactList.vue'
import ProfileFriendList from '../views/FriendList.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/services/api-development',
      name: 'API Development',
      component: ServicesAPIDevelopment
    },
    {
      path: '/services/web-development',
      name: 'Web Development',
      component: ServicesWebDevelopment
    },
    {
      path: '/services/app-development',
      name: 'App Development',
      component: ServicesAppDevelopment
    },
    {
      path: '/services/ui-ux-design',
      name: 'UI/UX Design',
      component: ServicesUIUXDesign
    },
    {
      path: '/services/graphic-design',
      name: 'Graphic Design',
      component: ServicesGraphicDesign
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/about',
      name: 'About Us',
      component: About
    },
    {
      path: '/about/projects',
      name: 'Projects',
      component: AboutProjects
    },
    {
      path: '/about/teams',
      name: 'Teams',
      component: AboutTeams
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      meta: { requiresAuth: true }, // Annahme: Sicherstellen, dass der Benutzer angemeldet ist
      beforeEnter: (to, from, next) => {
        logout(); // Aufruf der logout-Funktion aus logout.js
        next('/login');
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile/follower_list',
      name: 'Follower List',
      component: ProfileFollowerList
    },
    {
      path: '/profile/contact_list',
      name: 'Contact List',
      component: ProfileContactList
    },
    {
      path: '/profile/friend_list',
      name: 'Friend List',
      component: ProfileFriendList
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})

export default router


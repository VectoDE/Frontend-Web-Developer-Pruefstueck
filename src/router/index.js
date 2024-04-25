//Import the function to route the uri
import { createRouter, createWebHistory } from 'vue-router'

//Import the site for the Homepage
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

//Import the sites of the Authentication of Login, Registration and Logout
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import { logout } from './logout.js';

//Import of the profiles sites
import Profile from '../views/auth/users/Profile.vue'
import ProfileFollowerList from '../views/auth/users/connections/FollowerList.vue'
import ProfileContactList from '../views/auth/users/connections/ContactList.vue'
import ProfileFriendList from '../views/auth/users/connections/FriendList.vue'
import ProfileSettings from '../views/auth/users/Settings.vue'

//Import of all sites of the dashboard for the team of the webpage
import DashboardOverview from '../views/auth/dashboard/Overview.vue'
import DashboardCalender from '../views/auth/dashboard/calender/Calender.vue'
import DashboardEditAppointment from '../views/auth/dashboard/calender/edit_Appointment.vue'
import DashboardCreateAppointment from '../views/auth/dashboard/calender/create_Appointment.vue'
import DashboardCategories from '../views/auth/dashboard/category/Categories.vue'
import DashboardCreateCategory from '../views/auth/dashboard/category/create_Category.vue'
import DashboardEditCategory from '../views/auth/dashboard/category/edit_Category.vue'
import DashboardContracts from '../views/auth/dashboard/contracts/Contracts.vue'
import DashboardCreateContract from '../views/auth/dashboard/contracts/create_Contract.vue'
import DashboardEditContract from '../views/auth/dashboard/contracts/edit_Contract.vue'
import DashboardMailOverview from '../views/auth/dashboard/email/Mail_Overview.vue'
import DashboardCreateEmail from '../views/auth/dashboard/email/create_Email.vue'
import DashboardRoles from '../views/auth/dashboard/roles/Roles.vue'
import DashboardCreateRoles from '../views/auth/dashboard/roles/create_Role.vue'
import DashboardEditRoles from '../views/auth/dashboard/roles/edit_Role.vue'
import DashboardTask from '../views/auth/dashboard/tasks/Tasks.vue'
import DashboardCreateTask from '../views/auth/dashboard/tasks/create_Task.vue'
import DashboardEditTaks from '../views/auth/dashboard/tasks/edit_Task.vue'
import DashboardTeams from '../views/auth/dashboard/team/Teams.vue'
import DashboardCreateTeam from '../views/auth/dashboard/team/create_Team.vue'
import DashboardEditTeam from '../views/auth/dashboard/team/edit_Team.vue'
import DashboardThemas from '../views/auth/dashboard/thema/Themas.vue'
import DashboardCreateThema from '../views/auth/dashboard/thema/create_Thema.vue'
import DashboardEditThema from '../views/auth/dashboard/thema/edit_Thema.vue'
import DashboardUsers from '../views/auth/dashboard/users/Users.vue'
import DashboardCreateUser from '../views/auth/dashboard/users/create_User.vue'
import DashboardEditUser from '../views/auth/dashboard/users/edit_User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
      path: '/profile/settings',
      name: 'Settings',
      component: ProfileSettings
    },
    {
      path: '/dashboard',
      name: 'Dashboard Overview',
      component: DashboardOverview
    },
    {
      path: '/dashboard/calender',
      name: 'Dashboard Calender',
      component: DashboardCalender
    },
    {
      path: '/dashboard/calender/edit_appointment',
      name: 'Dashboard Edit Appointment',
      component: DashboardEditAppointment
    },
    {
      path: '/dashboard/calender/create_appointment',
      name: 'Dashboard Create Appointment',
      component: DashboardCreateAppointment
    },
    {
      path: '/dashboard/categories',
      name: 'Dashboard Categories',
      component: DashboardCategories
    },
    {
      path: '/dashboard/categories/create_category',
      name: 'Dashboard Create Category',
      component: DashboardCreateCategory
    },
    {
      path: '/dashboard/categories/edit_category',
      name: 'Dashboard Edit Category',
      component: DashboardEditCategory
    },
    {
      path: '/dashboard/contracts',
      name: 'Dashboard Contracts',
      component: DashboardContracts
    },
    {
      path: '/dashboard/contracts/create_contract',
      name: 'Dashboard Create Contract',
      component: DashboardCreateContract
    },
    {
      path: '/dashboard/contracts/edit_contract',
      name: 'Dashboard Edit Contract',
      component: DashboardEditContract
    },
    {
      path: '/dashboard/email',
      name: 'Dashboard Mail Overview',
      component: DashboardMailOverview
    },
    {
      path: '/dashboard/email/create_email',
      name: 'Dashboard Create Email',
      component: DashboardCreateEmail
    },
    {
      path: '/dashboard/roles',
      name: 'Dashboard Roles',
      component: DashboardRoles
    },
    {
      path: '/dashboard/roles/create_role',
      name: 'Dashboard Create Role',
      component: DashboardCreateRoles
    },
    {
      path: '/dashboard/roles/edit_role',
      name: 'Dashboard Edit Role',
      component: DashboardEditRoles
    },
    {
      path: '/dashboard/tasks',
      name: 'Dashboard Tasks',
      component: DashboardTask
    },
    {
      path: '/dashboard/tasks/create_task',
      name: 'Dashboard Create Task',
      component: DashboardCreateTask
    },
    {
      path: '/dashboard/tasks/edit_task',
      name: 'Dashboard Edit Task',
      component: DashboardEditTaks
    },
    {
      path: '/dashboard/teams',
      name: 'Dashboard Teams',
      component: DashboardTeams
    },
    {
      path: '/dashboard/teams/create_team',
      name: 'Dashboard Create Team',
      component: DashboardCreateTeam
    },
    {
      path: '/dashboard/teams/edit_team',
      name: 'Dashboard Edit Team',
      component: DashboardEditTeam
    },
    {
      path: '/dashboard/thema',
      name: 'Dashboard Themas',
      component: DashboardThemas
    },
    {
      path: '/dashboard/thema/create_thema',
      name: 'Dashboard Create Thema',
      component: DashboardCreateThema
    },
    {
      path: '/dashboard/thema/edit_thema',
      name: 'Dashboard Edit Thema',
      component: DashboardEditThema
    },
    {
      path: '/dashboard/users',
      name: 'Dashboard Users',
      component: DashboardUsers
    },
    {
      path: '/dashboard/users/create_user',
      name: 'Dashboard Create User',
      component: DashboardCreateUser
    },
    {
      path: '/dashboard/users/edit_user',
      name: 'Dashboard Edit User',
      component: DashboardEditUser
    }
  ]
})

export default router


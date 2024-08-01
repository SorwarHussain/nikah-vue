import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PasswordReset from '../components/PasswordReset.vue'
import ChangePassword from '../components/ChangePassword.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Bio from '../views/bio.vue'
import Profile from '../views/CreateBio.vue'
import BioDetails from '../views/BioDetails.vue'
import NotFound from '../views/NotFound.vue'
import Sadakah from '../views/Sadakah.vue'
import SadakahDetails from '../views/Admin/SadakahDetails.vue'
import UserDetails from '../views/Admin/UserDetails.vue'
import Contact from '../views/Contact.vue'
import Wishlist from '../views/Wishlist.vue'
//admin
import AdminProfiles from '../views/Admin/Profiles.vue'
import AdminDonates from '../views/Admin/Donates.vue'
import AdminUsers from '../views/Admin/Users.vue'
//
import Verify from '../views/auth/Verify.vue'

const BASE_URL = '/'; 
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      /*beforeEnter: (to, from, next) => {
          if (localStorage.getItem('token')) {
              next();
          } else {
              next({name: 'Home'});
          }
      }*/
  },
    {
      path: '/profile/:id?',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/admin/profiles',
      name: 'AdminProfiles',
      component: AdminProfiles
    },
    {
      path: '/admin/donates',
      name: 'AdminDonates',
      component: AdminDonates
    },
    {
      path: '/sadakah/:id',
      name: 'SadakahDetails',
      component: SadakahDetails,
      props: true
    },
    {
      path: '/admin/users',
      name: 'AdminUsers',
      component: AdminUsers
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetails',
      component: UserDetails,
      props: true
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/bios/:id',
      name: 'BioDetails',
      component: BioDetails,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Register',
      component: Register
    },
    {
      path: '/password-reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/sadakah',
      name: 'Sadakah',
      component: Sadakah
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    /*{
      path: '/wishlist/:id?',
      name: 'wishlist',
      component: wishlist
    },*/
      // 404 catchall
      {
        path: '/api/auth/email/verify',
        name: 'verify',
        component: Verify,
        /*beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token')) {
                next({name: 'Dashboard'});
            } else {
                next();
            }
        }*/
    },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
  ]
  
  const router = createRouter({
   // history: createWebHistory(process.env.BASE_URL),
   history: createWebHistory(BASE_URL),
    routes
  })
  
  export default router
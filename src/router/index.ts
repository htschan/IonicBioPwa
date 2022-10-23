import { createRouter, createWebHistory } from '@ionic/vue-router';
import "firebase/compat/firestore";
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BpPage from '../views/BpPage.vue';
import BpEditPage from '../views/BpEditPage.vue';
import LoginPage from '../views/LoginPage.vue';
import LogoutPage from '../views/LogoutPage.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/bp',
    name: 'Bp',
    component: BpPage
  },
  {
    path: '/bpupdate/:id',
    name: 'BpUpdate',
    component: BpEditPage
  },
  {
    path: '/bpadd',
    name: 'BpAdd',
    component: BpEditPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


import { createRouter, createWebHistory } from '@ionic/vue-router';
import firebase from 'firebase/compat/app';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import LogoutPage from '../views/LogoutPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import { AppAuth } from "../services/AuthState";

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

const firebaseConfig = {
  apiKey: "AIzaSyBrG-QSF0Cnooo0w8gajvtzCB3alIASeP0",
  authDomain: "myhome-c5350.firebaseapp.com",
  databaseURL: "https://myhome-c5350.firebaseio.com",
  projectId: "myhome-c5350",
  storageBucket: "myhome-c5350.appspot.com",
  messagingSenderId: "844342741846",
  appId: "1:844342741846:web:1a096ff331424904eae4f7"
};

AppAuth.AuthState = null;

firebase.initializeApp(firebaseConfig);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  console.log(`before to: ${String(to.name)} from: ${String(from.name)}  Authentocated: ${AppAuth.Authenticated}`);
  if (!AppAuth.Authenticated && to.name !== 'Login') {
    console.log(`before to: ${String(to.name)} from: ${String(from.name)}`);
    return { name: 'Login' }
  }
  console.log("Router beforeRach");
})

firebase.auth().onAuthStateChanged(u => {
  AppAuth.AuthState = u;
});

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import firebase from 'firebase/compat/app';
import { isNavigationFailure, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
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

firebase.initializeApp(firebaseConfig);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (!isAuthenticated() && to.name !== 'Login') {
    console.log(`before to: ${String(to.name)} from: ${String(from.name)}`);
    return { name: 'Login' }
  }
})

// router.afterEach((to, from, failure) => {
//   console.log(`after to: ${String(to.name)} from: ${String(from.name)}`);
//   if (isNavigationFailure(failure)) {
//     console.log("---- Navigation failed ---");
//   }
// })

let user: firebase.User;
function isAuthenticated() {
  return user != null;
}

firebase.auth().onAuthStateChanged(u => {
  user = u as firebase.User;
  const cr = router.currentRoute;
  console.log(`onAuthStateChange current route: ${String(cr.value.name)}  user: ${user}`);
  // if (user != null && cr.value.name === 'Login') {
  //   console.log(`onAuthStateChange push to Home`);
  //   router.push('Home');
  // }
  // if (user == null && cr.value.name === 'Login') {
  //   console.log(`onAuthStateChange push to Login`);
  //   router.push('Login');
  // }
  // console.log(`onAuthStateChange ---------------------------`);
});

export default router

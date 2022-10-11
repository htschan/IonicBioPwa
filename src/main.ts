import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import MasterLayout from './components/MasterLayout.vue';
import './registerServiceWorker';

/* Theme variables */
import './theme/variables.css';

// moved firebase initialization to router/index.ts
// const firebaseConfig = {
//   apiKey: "AIzaSyBrG-QSF0Cnooo0w8gajvtzCB3alIASeP0",
//   authDomain: "myhome-c5350.firebaseapp.com",
//   databaseURL: "https://myhome-c5350.firebaseio.com",
//   projectId: "myhome-c5350",
//   storageBucket: "myhome-c5350.appspot.com",
//   messagingSenderId: "844342741846",
//   appId: "1:844342741846:web:1a096ff331424904eae4f7"
// };

// firebase.initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('master-layout', MasterLayout);

router.isReady().then(() => {
  app.mount('#app');
});
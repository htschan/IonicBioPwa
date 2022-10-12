import { defineStore } from 'pinia';
import firebase from 'firebase/compat/app'
import { useDataStore } from './DataStore';
import router from '@/router';

export const useAuthStore = defineStore('AuthStore', {
    state: (): IState => {
        return {
            user: {} as firebase.User | null,
            fApp: {} as firebase.app.App,
            initialized: false
        }
    },
    getters: {
        isAuthenticated: (state) => state.user !== null,
        firebaseConfig(): any {
            const firebaseConfig = {
                apiKey: "AIzaSyBrG-QSF0Cnooo0w8gajvtzCB3alIASeP0",
                authDomain: "myhome-c5350.firebaseapp.com",
                databaseURL: "https://myhome-c5350.firebaseio.com",
                projectId: "myhome-c5350",
                storageBucket: "myhome-c5350.appspot.com",
                messagingSenderId: "844342741846",
                appId: "1:844342741846:web:1a096ff331424904eae4f7"
            };
            return firebaseConfig;
        },
        firebaseApp(): firebase.app.App {
            if (!this.initialized) {
                this.fApp = firebase.initializeApp(this.firebaseConfig);
                this.initialized = true;
            }
            return this.fApp;
        },
        db(): firebase.firestore.Firestore {
            return this.firebaseApp.firestore();
        },
        auth(): firebase.auth.Auth {
            return this.firebaseApp.auth();
        }
    },
    actions: {
        init() {
            this.auth.onAuthStateChanged(u => {
                const authStore = useAuthStore();
                authStore.user = u;
                const currRoute = String(router.currentRoute.value.name);
                if (authStore.isAuthenticated && currRoute === 'Login') {
                    router.push("Home");
                }
                if (!authStore.isAuthenticated && currRoute !== 'Login') {
                    router.push("Login");
                }
                if (authStore.isAuthenticated) {
                    const store = useDataStore()
                    store.init();
                }
            });

        }
    }
})

interface IState {
    user: firebase.User | null
    fApp: firebase.app.App
    initialized: boolean
}
import firebase from 'firebase/compat'
import { reactive } from 'vue'

export const AppAuth = reactive({
  count: 0,
  user: {} as firebase.User | null,
  increment() {
    this.count++
  },
  set AuthState(u: firebase.User | null) {
    this.user = u
  },
  get Authenticated(): boolean {
    return this.user !== null;
  },
  get User(): firebase.User | null {
    return this.user;
  }
})

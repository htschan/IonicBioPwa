import { defineStore } from 'pinia';
import { useAuthStore } from './AuthStore';

export const useDataStore = defineStore('BpItemStore', {

    state: (): IState => {
        return {
            bpItems: [] as IBpItem[]
        }
    },
    getters: {
        count(): number {
            return this.bpItems.length
        },
        isEmpty(): boolean {
            return this.count === 0
        },
        isEmpty2: (state) => state.bpItems.length === 0
    },
    actions: {
        init(){
            if (this.isEmpty){
                this.load();
            }
        },
        // sync variant
        load() {
            const authStore = useAuthStore();
            authStore.db.collection(`UserItems/${authStore.user?.uid}/BpItems`)
                .orderBy("dt", "desc")
                .get()
                .then((querySnapshot) => {
                    useDataStore().bpItems.splice(0);
                    querySnapshot.forEach((doc) => {
                        useDataStore().bpItems.push(doc.data() as IBpItem);
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        },
        // async variant
        async loadAsync() {
            console.log("loadAsync called...");
            const authStore = useAuthStore();
            const FirebaseCollection = authStore.db.collection(`UserItems/${authStore.user?.uid}/BpItems`);
            const querySnapshot = await FirebaseCollection.orderBy("dt", "desc").get();
            const result = querySnapshot.docs.map((doc: any) => {
                return { ...doc.data() }
            });
            result.forEach((doc) => {
                useDataStore().bpItems.splice(0);
                querySnapshot.forEach((doc) => {
                    useDataStore().bpItems.push(doc.data() as IBpItem);
                });
            })
        }
    }
})

interface IState {
    bpItems: IBpItem[]
}
export interface IBpItem {
    hi: number
    lo: number
    hr: number
    dt: string
    co: string
} 
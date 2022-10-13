<template>
    <master-layout pageTitle="Bp">
        <div>Blutdruck</div>
        <div>
            Authenticated: {{authStore.isAuthenticated}}
        </div>
        <div>
            count: {{bpList.length}} items
        </div>
        <ion-list>
            <ion-item v-for="(item, index) in bpList" :key="index">
                {{item.dt}}&nbsp;{{item.hi}}&nbsp;{{item.lo}}&nbsp;{{item.hr}}
                <ion-button slot="end" @click="updateOperation(item, index)">update</ion-button>
                <ion-button slot="end" @click="deleteOperation(item, index)">Delete</ion-button>
            </ion-item>
        </ion-list>
    </master-layout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonItem, IonList } from "@ionic/vue";
import { useAuthStore } from "@/stores/AuthStore";
import firebaseService from '../services/firebaseService';
import { IBpItem } from '../services/firebaseService';

export default defineComponent({
    components: { IonList, IonItem, IonButton },
    data() {
        const authStore = useAuthStore();
        return {
            authStore,
            bpList: [] as IBpItem[]
        }
    },
    ionViewDidEnter() {
        const listPromise = firebaseService().readOrderedBpItems()
        listPromise.then((data: IBpItem[]) => {
            this.bpList = data;
        })
    },
    // created() {
    //     const listPromise = firebaseService().readOrderedBpItems(this.authStore.user?.uid)
    //     listPromise.then((data: IBpItem[]) => {
    //         this.bpList = data;
    //     })
    // },
    methods: {
        async updateOperation(item: IBpItem, index: any) {
            this.$router.push({ name: 'BpUpdate', params: { id: item.id } })
        },
        deleteOperation(item: IBpItem, index: any) {
            console.log(item);
            this.bpList.splice(index, 1);
            firebaseService().deleteBpItem(item.id);
        }
    }
});

</script>
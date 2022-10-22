<template>
    <master-layout pageTitle="Bp">
        <div>Blutdruck ({{bpList.length}})</div>
        <ion-list>
            <ion-item v-for="(item, index) in bpList" :key="index">
                {{shortDateTime(item.dt)}}<br>
                {{item.hi}}&nbsp;{{item.lo}}&nbsp;{{item.hr}}
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
    async ionViewDidEnter() {
        this.bpList = await firebaseService().readOrderedBpItems()
    },
    methods: {
        async updateOperation(item: IBpItem, index: any) {
            this.$router.push({ name: 'BpUpdate', params: { id: item.id } })
        },
        async deleteOperation(item: IBpItem, index: any) {
            this.bpList.splice(index, 1);
            await firebaseService().deleteBpItem(item.id);
        },
        shortDateTime(longTime: string): string {
            const dt = new Date(longTime);
            return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`
        }
    }
});

</script>
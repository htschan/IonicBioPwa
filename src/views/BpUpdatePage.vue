<template>
    <master-layout pageTitle="Bp">
        <div>Update Blutdruck</div>
        <div>
            Authenticated: {{authStore.isAuthenticated}} &nbsp;
        </div>
        <ion-content :fullscreen="true">
            <ion-row>
                <ion-col>
                    <ion-input type="number" v-model="bpItem.hr" placeholder="Enter heartrate" class="input"
                        padding-horizontal></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input type="number" v-model="bpItem.hi" placeholder="Enter systole" class="input"
                        padding-horizontal></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input type="number" v-model="bpItem.lo" placeholder="Enter diastole" class="input"
                        padding-horizontal></ion-input>
                </ion-col>
            </ion-row>
            <div class="container">
                <ion-button @click="updateOperation()">Update Data</ion-button>
            </div>
        </ion-content>
    </master-layout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonCol, IonContent, IonInput, IonRow } from "@ionic/vue";
import { useAuthStore } from "@/stores/AuthStore";
import firebaseService from '../services/firebaseService';
import { IBpItem } from '../services/firebaseService';

export default defineComponent({
    components: { IonButton, IonContent, IonRow, IonCol, IonInput },
    data() {
        const authStore = useAuthStore();
        return {
            authStore,
            bpItem: {} as IBpItem,
            id: ""
        }
    },
    ionViewDidEnter() {
        this.id = this.$route.params.id as string;
        const listPromise = firebaseService().findBpItemByDocId(this.id);
        listPromise.then((data: IBpItem) => {
            this.bpItem = data;
        })
    },
    methods: {
        async updateOperation() {
            const data: any = await firebaseService().updateOperation(this.id, this.bpItem);
            console.log('Data', data);
            this.$router.push({ name: 'Bp' })
        }
    }
});

</script>
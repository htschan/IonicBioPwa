<template>
    <master-layout pageTitle="Bp">
        <div>Add Blutdruck</div>
        <div>
            Authenticated: {{authStore.isAuthenticated}} &nbsp;
        </div>
        <ion-content>
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
            <ion-row>
                <ion-col>
                    <ion-input type="text" v-model="bpItem.co" placeholder="Enter comment" class="input"
                        padding-horizontal></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-button @click="addOperation()">Add</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="cancel()">cancel</ion-button>
                </ion-col>
            </ion-row>
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
            bpItem: {} as IBpItem
        }
    },
    methods: {
        async cancel() {
            this.$router.push({ name: 'Home' })
        },
        async addOperation() {
            const item = Object.assign({}, this.bpItem);
            item.dt = new Date().toISOString();
            await firebaseService().addBpItem(item);
            this.$router.push({ name: 'Home' })
        }
    }
});

</script>
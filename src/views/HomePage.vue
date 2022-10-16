<template>
    <master-layout pageTitle="Home">
        <div>Bludtdruck ({{dataStore.count}})</div>
        <ion-button @click="dataStore.load()" color="primary">Update</ion-button>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button @click="addOperation()">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
        <ion-grid>
            <ion-row v-for="item in dataStore.bpItems" :key="item.dt">
                <ion-card>
                    <ion-card-title>
                        {{item.hi}}
                        {{item.lo}}
                        {{item.hr}}
                    </ion-card-title>
                    <ion-card-subtitle>
                        {{shortDateTime(item.dt)}}
                    </ion-card-subtitle>
                    <ion-card-content>
                        {{item.co}}
                    </ion-card-content>
                </ion-card>
            </ion-row>
        </ion-grid>
    </master-layout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonGrid, IonIcon, IonRow } from "@ionic/vue";
import { useDataStore } from "../stores/DataStore";
import { useAuthStore } from "@/stores/AuthStore";
import { add } from "ionicons/icons";

export default defineComponent({
    components: { IonButton, IonGrid, IonRow, IonFab, IonFabButton, IonIcon, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent },
    data() {
        const dataStore = useDataStore()
        const authStore = useAuthStore();
        return {
            dataStore,
            authStore
        }
    },
    methods: {
        async addOperation() {
            this.$router.push({ name: 'BpAdd' })
        },
        shortDateTime(longTime: string): string {
            const dt = new Date(longTime);
            return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`
        }
    },
    setup() {
        return {
            add
        }
    }
});

</script>
<style scoped>
ion-card {
    display: flex;
    background: linear-gradient(#f4f5f8, #ffd534);
    flex-direction: column;
    width: 100% !important;
    max-width: 350px !important;
    margin: 10 !important;
}
</style>
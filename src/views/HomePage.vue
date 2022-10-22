<template>
    <master-layout pageTitle="Home">
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button @click="addOperation()">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>Blutdruck / ความดันโลหิต({{dataStore.count}})</ion-card-title>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row v-for="item in dataStore.bpItems" :key="item.dt">
                <ion-col>
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
                            <ion-grid>
                                <ion-row>
                                    <ion-col size="6">
                                        {{item.co}}
                                    </ion-col>
                                    <ion-col size="4" offset="2">
                                        <stack-indicator-hor :modelValueHi="item.hi" :modelValueLo="item.lo">
                                        </stack-indicator-hor>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
    </master-layout>

</template>

<script lang="ts">
import { onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonCol } from "@ionic/vue";
import { useDataStore } from "../stores/DataStore";
import { useAuthStore } from "@/stores/AuthStore";
import { add } from "ionicons/icons";
import StackIndicatorHor from "@/components/StackIndicatorHor.vue";

export default defineComponent({
    components: { IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, StackIndicatorHor },
    data() {
        const dataStore = useDataStore()
        const authStore = useAuthStore()
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
        onIonViewWillEnter(() => {
            const dataStore = useDataStore()
            dataStore.load()
        });
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
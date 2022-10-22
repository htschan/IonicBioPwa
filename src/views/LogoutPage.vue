<template>
    <master-layout pageTitle="Logout">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>Logout</ion-card-title>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>
                            <ion-button @click="signoutButtonPressed">Logout {{ authStore.user?.email }}</ion-button>
                        </ion-card-title>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
    </master-layout>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { defineComponent } from 'vue';
import { IonButton, useIonRouter, IonCard, IonCardTitle, IonGrid, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
    name: "LogoutPage",
    components: {
        IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardTitle
    },
    data() {
        const authStore = useAuthStore();
        return { authStore }
    },
    methods: {
        signoutButtonPressed(e: any) {
            const authStore = useAuthStore();
            e.stopPropagation();
            authStore.auth.signOut();
            const ionRouter = useIonRouter();
            ionRouter.navigate({ name: "Login" });
        }
    }
});

</script>
<style scoped>
ion-card {
    display: flex;
    background: linear-gradient(#e2c5db, #9dbae7);
    flex-direction: column;
    width: 100% !important;
    max-width: 350px !important;
    margin: 10 !important;
}
</style>
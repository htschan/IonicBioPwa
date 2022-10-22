<template>
    <master-layout pageTitle="Profile">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>Profil</ion-card-title>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>
                            {{authStore.user?.displayName}}
                        </ion-card-title>
                        <ion-card-subtitle>
                            {{authStore.user?.email}}
                        </ion-card-subtitle>
                        <ion-card-content>
                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        {{authStore.user?.uid}}
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col>
                                        provider:
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-title>
                            Platform
                        </ion-card-title>
                        <ion-card-content>
                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        Platform: {{getPlatforms()}}
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col>
                                        provider:
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>        </ion-grid>
    </master-layout>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, getPlatforms } from "@ionic/vue";

export default defineComponent({
    name: "ProfilePage",
    components: { IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent },
    data() {
        const authStore = useAuthStore();
        return { authStore, getPlatforms }
    }
});
</script>
<style scoped>
ion-card {
    display: flex;
    background: linear-gradient(#bcc9f3, #c9df8f);
    flex-direction: column;
    width: 100% !important;
    max-width: 350px !important;
    margin: 10 !important;
}
</style>
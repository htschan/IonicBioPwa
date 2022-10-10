<template>
    <ion-menu menu-id="app-menu" content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Welcome!</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item button @click="menuNavigation('/Home')">
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/Login')">
                    <ion-label>Login</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/Logout')">
                    <ion-label>Logout</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/Profile')">
                    <ion-label>Profile</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>
  
<script lang="ts">
import { IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel, menuController, } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel,
    },
    methods: {
        menuNavigation(url: string) {
            menuController.close("app-menu");
            this.$router.push(url);
        }
    }
});
</script>
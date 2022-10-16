<template>
    <master-layout pageTitle="Logout">
        <div>Logout page</div>
        <ion-button @click="signoutButtonPressed">Logout {{ authStore.user?.email }}</ion-button>
    </master-layout>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { IonButton, useIonRouter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LogoutPage",
    components: {
        IonButton
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
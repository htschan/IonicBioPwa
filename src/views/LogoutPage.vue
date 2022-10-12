<template>
    <master-layout pageTitle="Logout">
        <div>Logout page</div>
        <span><a @click="signoutButtonPressed">Logout {{ authStore.user?.email }}</a></span>
    </master-layout>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { useIonRouter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LogoutPage",
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
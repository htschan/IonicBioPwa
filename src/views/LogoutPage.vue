<template>
    <master-layout pageTitle="Logout">
        <div>Logout page</div>
        <span><a @click="signoutButtonPressed">Logout {{ AppAuth.User?.email }}</a></span>
    </master-layout>
</template>

<script lang="ts">
import { useIonRouter } from '@ionic/vue';
import firebase from 'firebase/compat/app';
import { defineComponent } from 'vue';
import { AppAuth } from "../services/AuthState";

export default defineComponent({
    name: "LogoutPage",
    data() {
        return { AppAuth }
    },
    methods: {
        signoutButtonPressed(e: any) {
            e.stopPropagation();
            firebase.auth().signOut();
            this.gotoLogin();
        }
    },
    setup() {
        const ionRouter = useIonRouter();
        const gotoLogin = () => {
            ionRouter.navigate({ name: "Login" });
        }
        return {
            gotoLogin
        }
    }
});

</script>
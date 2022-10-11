<template>
    <master-layout pageTitle="Profile">
        <div>Profile Page</div>
        <p>
            name:
            <strong>{{user?.displayName}}</strong>
            <br />email:
            <strong>{{user?.email}}</strong>
            <br />uid:
            <strong>{{user?.uid}}</strong>
            <br />provider:
            <!-- <strong class="teal-text">{{user?.providerData[0]?.providerId}}</strong> -->
        </p>
    </master-layout>
</template>

<script lang="ts">
import firebase from 'firebase/compat/app';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ProfilePage",
    data() {
        return { user: {} as firebase.User }
    },
    mounted() {
        firebase.auth().onAuthStateChanged(u => {
            this.user = u as firebase.User;
        });
    },
});
</script>
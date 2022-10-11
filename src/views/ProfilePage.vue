<template>
    <master-layout pageTitle="Profile">
        <div>Profile Page</div>
        <p>
            name:
            <strong>{{AppAuth.user?.displayName}}</strong>
            <br />email:
            <strong>{{AppAuth.user?.email}}</strong>
            <br />uid:
            <strong>{{AppAuth.user?.uid}}</strong>
            <br />provider:
            <!-- <strong class="teal-text">{{user?.providerData[0]?.providerId}}</strong> -->
        </p>
    </master-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AppAuth } from "../services/AuthState";

export default defineComponent({
    name: "ProfilePage",
    data() {
        return { AppAuth }
    }
});
</script>
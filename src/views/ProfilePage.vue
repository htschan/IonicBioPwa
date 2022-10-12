<template>
    <master-layout pageTitle="Profile">
        <div>Profile Page</div>
        <p>
            name:
            <strong>{{authStore.user?.displayName}}</strong>
            <br />email:
            <strong>{{authStore.user?.email}}</strong>
            <br />uid:
            <strong>{{authStore.user?.uid}}</strong>
            <br />provider:
            <!-- <strong class="teal-text">{{user?.providerData[0]?.providerId}}</strong> -->
        </p>
    </master-layout>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ProfilePage",
    data() {
        const authStore = useAuthStore();
        return { authStore }
    }
});
</script>
<template>
    <master-layout pageTitle="Home">
        <div>Welcom Home Page !</div>
        <button @click="AppAuth.increment()">
            From B: {{ AppAuth.count }}
        </button>
        <div>
            Authenticated: {{AppAuth.Authenticated}}
        </div>
    </master-layout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppAuth } from "../services/AuthState";

export default defineComponent({
    data() {
        return {
            AppAuth
        }
    }
});
</script>
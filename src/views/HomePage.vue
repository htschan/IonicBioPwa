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
import { AppAuth } from "../services/AuthState";

export default {
    data() {
        return {
            AppAuth
        }
    }
};
</script>
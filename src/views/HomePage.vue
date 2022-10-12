<template>
    <master-layout pageTitle="Home">
        <div>Welcom Home Page !</div>
        <button @click="store.load()">Load</button>
        <div>
            Authenticated: {{authStore.isAuthenticated}}
        </div>
        <div>
            count: {{store.count}}
        </div>
        <ion-list>
            <ion-item v-for="item in store.bpItems" :key="item.dt">
                {{item.dt}}&nbsp;{{item.hi}}&nbsp;{{item.lo}}&nbsp;{{item.hr}}
            </ion-item>
        </ion-list>
    </master-layout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonItem, IonList } from "@ionic/vue";
import { useDataStore } from "../stores/DataStore";
import { useAuthStore } from "@/stores/AuthStore";

export default defineComponent({
    components: { IonList, IonItem },
    data() {
        const store = useDataStore()
        const authStore = useAuthStore();
        return {
            store,
            authStore
        }
    }
});
</script>
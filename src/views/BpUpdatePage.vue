<template>
    <master-layout pageTitle="Bp">
        <div>Update Blutdruck</div>
        <ion-content>
            <ion-row>
                <number-edit label-text="Systole" v-model="bpItem.hi" place-holder="Systolisch"/>
            </ion-row>
            <ion-row>
                <number-edit label-text="Diastolisch" v-model="bpItem.lo" place-holder="Diastolisch" min="60" max="200"/>
            </ion-row>
            <ion-row>
                <number-edit label-text="Puls" v-model="bpItem.hr" place-holder="Puls" min="40" max="120"/>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input type="text" v-model="bpItem.co" placeholder="Kommentar" class="input" padding-horizontal>
                    </ion-input>
                </ion-col>
            </ion-row>
        
            <ion-row>
                <ion-col>
                    <ion-button @click="updateOperation()">Update Data</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="cancel()">cancel</ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </master-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonCol, IonContent, IonInput, IonRow } from "@ionic/vue";
import { useAuthStore } from "@/stores/AuthStore";
import firebaseService from '../services/firebaseService';
import { IBpItem } from '../services/firebaseService';
import NumberEdit from "@/components/NumberEdit.vue";

export default defineComponent({
    components: { IonButton, IonContent, IonRow, IonCol, NumberEdit  },
    data() {
        const authStore = useAuthStore();
        return {
            authStore,
            bpItem: {} as IBpItem,
            id: "",
            hi: 0
        }
    },
    async ionViewDidEnter() {
        this.id = this.$route.params.id as string;
        this.bpItem = await firebaseService().findBpItemByDocId(this.id);
    },
    methods: {
        async cancel() {
            this.$router.push({ name: 'Bp' })
        },
        async updateOperation() {
            const item = Object.assign({}, this.bpItem);
            await firebaseService().updateBpItem(this.id, item);
            this.$router.push({ name: 'Bp' })
        },
        valueChanged(param: any) {
            debugger;
            console.log("got value edited: " + param.modelValue);
        }
    }
});

</script>
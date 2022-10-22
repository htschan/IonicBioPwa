<template>
    <master-layout pageTitle="Bp">
        <div>{{modeString}} Blutdruck</div>
        <ion-content>
            <ion-row>
                <number-edit-comp label-text="Systole / ซิสโตลิก" v-model="bpItem.hi" place-holder="Systolisch" min="60"
                    max="200" />
            </ion-row>
            <ion-row>
                <number-edit-comp label-text="Diastolisch / ไดแอสโตลิก" v-model="bpItem.lo" place-holder="Diastolisch" min="60"
                    max="200" />
            </ion-row>
            <ion-row>
                <number-edit-comp label-text="Puls / อัตราการเต้นของหัวใจ" v-model="bpItem.hr" place-holder="Puls" min="40" max="120" />
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input type="text" v-model="bpItem.co" placeholder="Kommentar / ความคิดเห็น" class="input" padding-horizontal>
                    </ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-datetime presentation="date-time" :prefer-wheel="true" :value="bpItem.dt" placeholder="Datum" class="input" padding-horizontal>
                    </ion-datetime>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    <ion-button @click="save()">{{modeString}} Daten / ข้อมูล</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="cancel()">cancel / ยกเลิก</ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </master-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonCol, IonContent, IonInput, IonRow, IonDatetime } from "@ionic/vue";
import { useAuthStore } from "@/stores/AuthStore";
import firebaseService from '../services/firebaseService';
import { IBpItem } from '../services/firebaseService';
import NumberEditComp from "@/components/NumberEditComp.vue";
import { Preferences } from '@capacitor/preferences';

export default defineComponent({
    components: { IonButton, IonContent, IonRow, IonCol, NumberEditComp, IonInput, IonDatetime },
    data() {
        const authStore = useAuthStore();
        return {
            authStore,
            bpItem: {} as IBpItem,
            id: "",
            updateMode: false
        }
    },
    async ionViewDidEnter() {
        if (this.$route.params.id === undefined) {
            this.updateMode = false
            const s = await Preferences.get({ key: "IBpItem" });
            if (s && s.value) {
                this.bpItem = JSON.parse(s.value)
                this.bpItem.dt = new Date().toISOString()
            } else {
                this.bpItem = {
                    co: "",
                    hr: 60,
                    hi: 120,
                    lo: 80,
                    dt: new Date().toISOString()
                } as IBpItem
            }
        } else {
            this.id = this.$route.params.id as string;
            this.bpItem = await firebaseService().findBpItemByDocId(this.id);
            this.updateMode = true
        }
    },
    computed: {
        modeString() {
            return this.updateMode === true ? "Update / เพื่ออัพเดท" : "Add / เพิ่ม"
        }

    },
    methods: {
        async cancel() {
            if (this.updateMode) {
                this.$router.push({ name: 'Bp' })
            } else {
                this.$router.push({ name: 'Home' })
            }
        },
        async save() {
            const item = Object.assign({}, this.bpItem);
            if (this.updateMode) {
                await firebaseService().updateBpItem(this.id, item);
                this.$router.push({ name: 'Bp' })
            } else {
                await firebaseService().addBpItem(item);
                await Preferences.set({
                    key: "IBpItem",
                    value: JSON.stringify(item)
                })
                this.$router.push({ name: 'Home' })
            }
        }
    }
});

</script>
<template>
    <ion-grid :fixed="false">
        <ion-row>
            <ion-col size="6">
                <svg height="80" width="15" viewBox="0 0 30 240">
                    <polygon points="0,240 0,201 30,201 30,240" :style="{fill: h1}" />
                    <polygon points="0,200 0,161 30,161 30,200" :style="{fill: h2}" />
                    <polygon points="0,160 0,121 30,121 30,160" :style="{fill: h3}" />
                    <polygon points="0,120 0,81 30,81 30,120" :style="{fill: h4}" />
                    <polygon points="0,80 0,41 30,41 30,80" :style="{fill: h5}" />
                    <polygon points="0,40 0,0 30,0 30,40" :style="{fill: h6}" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </ion-col>
            <ion-col size="6">
                <svg height="80" width="15" viewBox="0 0 30 240">
                    <polygon points="0,240 0,201 30,201 30,240" :style="{fill: l1}" />
                    <polygon points="0,200 0,161 30,161 30,200" :style="{fill: l2}" />
                    <polygon points="0,160 0,121 30,121 30,160" :style="{fill: l3}" />
                    <polygon points="0,120 0,81 30,81 30,120" :style="{fill: l4}" />
                    <polygon points="0,80 0,41 30,41 30,80" :style="{fill: l5}" />
                    <polygon points="0,40 0,0 30,0 30,40" :style="{fill: l6}" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<!-- Composition API with Single File Component -->
<!-- https://vuejs.org/api/sfc-script-setup.html#basic-syntax -->
<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineProps, computed, toRef } from 'vue';

const props = defineProps({
    modelValueHi: { type: [String, Number] },
    modelValueLo: { type: [String, Number] },
})


const h1 = computed(() => {
    return rateValueHi() === 1 ? "green" : "white";
});
const h2 = computed(() => {
    return rateValueHi() === 2 ? "lime" : "white";
});
const h3 = computed(() => {
    return rateValueHi() === 3 ? "orange" : "white";
});
const h4 = computed(() => {
    return rateValueHi() === 4 ? "pink" : "white";
});
const h5 = computed(() => {
    return rateValueHi() === 5 ? "red" : "white";
});
const h6 = computed(() => {
    return rateValueHi() === 6 ? "darkred" : "white";
});

const l1 = computed(() => {
    return rateValueLo() === 1 ? "green" : "white";
});
const l2 = computed(() => {
    return rateValueLo() === 2 ? "lime" : "white";
});
const l3 = computed(() => {
    return rateValueLo() === 3 ? "orange" : "white";
});
const l4 = computed(() => {
    return rateValueLo() === 4 ? "pink" : "white";
});
const l5 = computed(() => {
    return rateValueLo() === 5 ? "red" : "white";
});
const l6 = computed(() => {
    return rateValueLo() === 6 ? "darkred" : "white";
});

function rateValueHi() {
    const n = toRef(props, 'modelValueHi');
    if (n.value) {
        let val = parseInt(n.value.toString())
        if (val < 120)
            return 1;
        if (val < 130)
            return 2;
        if (val < 140)
            return 3;
        if (val < 160)
            return 4;
        if (val < 180)
            return 5;
        return 6;
    }
    return 0
}

function rateValueLo() {
    const n = toRef(props, 'modelValueLo');
    if (n.value) {
        let val = parseInt(n.value.toString())
        if (val < 80)
            return 1;
        if (val < 85)
            return 2;
        if (val < 90)
            return 3;
        if (val < 100)
            return 4;
        if (val < 110)
            return 5;
        return 6;
    }
    return 0
}

</script>
<style scoped>
polygon {
    stroke: grey;
    stroke-width: 1;
}
</style>
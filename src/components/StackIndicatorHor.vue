<template>
    <ion-grid :fixed="false">
        <ion-row>
            <svg height="15" width="100" viewBox="0 0 241 31">
                <polygon points="0,0 40,0 40,30 0,30" :style="{fill: h1}" />
                <polygon points="41,0 80,0 80,30 41,30" :style="{fill: h2}" />
                <polygon points="81,0 120,0 120,30 81,30" :style="{fill: h3}" />
                <polygon points="121,0 160,0 160,30 121,30" :style="{fill: h4}" />
                <polygon points="161,0 200,0 200,30 161,30" :style="{fill: h5}" />
                <polygon points="201,0 240,0 240,30 201,30" :style="{fill: h6}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </ion-row>
        <ion-row>
            <svg height="15" width="100" viewBox="0 0 241 30">
                <polygon points="0,0 40,0 40,30 0,30" :style="{fill: l1}" />
                <polygon points="41,0 80,0 80,30 41,30" :style="{fill: l2}" />
                <polygon points="81,0 120,0 120,30 81,30" :style="{fill: l3}" />
                <polygon points="121,0 160,0 160,30 121,30" :style="{fill: l4}" />
                <polygon points="161,0 200,0 200,30 161,30" :style="{fill: l5}" />
                <polygon points="201,0 240,0 240,30 201,30" :style="{fill: l6}" />
                Sorry, your browser does not support inline SVG.
            </svg>
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
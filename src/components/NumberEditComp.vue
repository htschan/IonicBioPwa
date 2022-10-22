<template>
    <ion-grid :fixed="false">
        <ion-row>
            <ion-col>
                <ion-label>{{labelText}}</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size-lg="1" size-xs="3">
                <ion-input type="number" :value="modelValue" @input="updateValue" :placeholder="placeHolder" class="input"
                    padding-horizontal></ion-input>
            </ion-col>
            <ion-col size-lg="1" size-xs="3">
                <ion-button @click="decrement"><ion-icon :icon="remove"/></ion-button>
            </ion-col>
            <ion-col size-lg="1" size-xs="3">
                <ion-button @click="increment"><ion-icon :icon="add"/></ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<!-- Composition API with Single File Component -->
<!-- https://vuejs.org/api/sfc-script-setup.html#basic-syntax -->
<script setup lang="ts">
import { remove, add } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, IonLabel, IonButton, IonInput, IonIcon } from '@ionic/vue';
import { defineProps, defineEmits, toRef } from 'vue';

const props = defineProps({
    labelText: { type: String },
    placeHolder: { type: String, required: true },
    modelValue: { type: [String, Number] },
    min: String,
    max: String
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()


function increment() {
    const val = toRef(props, 'modelValue');
    if (val.value) {
        let s1 = parseFloat(val.value.toString());
        emit('update:modelValue', (s1 + 1).toString())
    }
}

function decrement() {
    const val = toRef(props, 'modelValue');
    if (val.value) {
        let s1 = parseFloat(val.value.toString());
        emit('update:modelValue', (s1 - 1).toString())
    }
}

function updateValue(event: any) {
    emit('update:modelValue', event.target.value)
}
</script>

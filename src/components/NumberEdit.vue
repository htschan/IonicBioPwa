<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-label>{{labelText}}</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-input type="number" :value="modelValue" @input="updateValue" :placeholder="placeHolder"
                    class="input" padding-horizontal></ion-input>
            </ion-col>
            <ion-col>
                <ion-button @click="decrement"><ion-icon :icon="remove"/></ion-button>
            </ion-col>
            <ion-col>
                <ion-button v-on:click="increment"><ion-icon :icon="add"/></ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<!-- Options API with Single File Component -->
<script lang="ts">
import { remove, add } from 'ionicons/icons';
import { defineComponent, toRef, toRefs } from 'vue'
import { IonCol, IonGrid, IonRow, IonButton, IonInput, IonLabel } from '@ionic/vue';

export default defineComponent({
    name: "NumberEdit",
    components: {
        IonCol, IonGrid, IonRow, IonButton, IonInput, IonLabel
    },
    data() {
        return {
            remove,
            add
        }
    },
    props: {
        placeHolder: String,
        labelText: String,
        modelValue: [String, Number],
        min: String,
        max: String
    },
    setup(props){
        const { max }  = toRefs(props);
        const min = toRef(props,'max');
    },
    methods: {
        updateValue(event: any) {
            this.$emit('update:modelValue', parseFloat(event.target.value))
        },
        increment() {
            if (this.modelValue) {
                let s1 = parseFloat(this.modelValue.toString());
                this.$emit('update:modelValue', s1 + 1);
            }
        },
        decrement() {
            if (this.modelValue) {
                let s1 = parseFloat(this.modelValue.toString());
                this.$emit('update:modelValue', s1 - 1);
            }
        }
    }
})
</script>

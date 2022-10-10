<template>
    <master-layout pageTitle="Login">
        <div> Login Page</div>
        <div id="firebaseui-auth-container"></div>
    </master-layout>
</template>

<script lang="ts">
import { onIonViewWillEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


export default defineComponent({
    name: 'LoginPage',
    components: {

    },
    setup() {
        onIonViewWillEnter(() => {
            // Initialize the FirebaseUI Widget using Firebase.
            let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
                ui = new firebaseui.auth.AuthUI(firebase.auth());
            }

            var uiConfig = {
                signInSuccessUrl: '/',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                tosUrl: '/termsofservice',
                // Privacy policy url/callback.
                privacyPolicyUrl: function () {
                    window.location.assign('/PrivacyPolicy');
                }
            };

            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        });
    }
});
</script>
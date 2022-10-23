# Ionic

```
$ npm install -g @ionic/cli
```

In case of updating the CLI, just uninstall old CLI

```
$ npm uninstall -g ionic
```

# Create an app

```
$ ionic start
```

A sample app is here:

https://www.learmoreseekmore.com/2021/01/ionic-vue-app-side-menu-integration-with-ion-menu-component.html


# Create PWA

```
$ vue add pwa
```

# Setup Firebase Hosting

Install the Firebase CLI

```
$ curl -sL https://firebase.tools | bash
```

Login and test the CLI

```
$ firebase login

$ firebase projects:list
```

Update the CLI

```
$ curl -sL https://firebase.tools | upgrade=true bash
```

Initialize a Firebase project

```
$ firebase init
```

Add firebaseui

```
$ npm install firebaseui --save
```

Add firebase config

```
const firebaseConfig = {
  apiKey: "AIzaxxxxxxxULDjYuxxxxxxxHwz8jbk-QxxxxxA",
  authDomain: "xxxxxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxxx.firebaseio.com",
  projectId: "xxxxxxx",
  storageBucket: "xxxxxxxxx.appspot.com",
  messagingSenderId: "834534534546",
  appId: "1:84324234846:web:4f523423435fdecf22eae4f7"
};

firebase.initializeApp(firebaseConfig);
```

## Preferences (Storage)

```
$ npm install @capacitor/preferences
```

Refer to 

https://capacitorjs.com/docs/apis/preferences


## Samples

Integrate Firebase into Ionic/Vue

https://www.enappd.com/blog/ionic-vue-with-firebase-firestore/194/


ionic-v6-firebase-tabs-auth

https://github.com/aaronksaunders/ionic-v6-firebase-tabs-auth


# Build

```
ionic build --prod
```

# Deploy

```
$ firebase deploy --only hosting:IonicBioPwa
```


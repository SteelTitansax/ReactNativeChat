import * as firebase from 'firebase/firebase';
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");
require("firebase/app");
require("firebase/functions");



const firebaseConfig = {
    apiKey: "AIzaSyC1eXkmxn3CAFAEVIIfA-RdwjTcM0xCOIU",
    authDomain: "signal-app-8852e.firebaseapp.com",
    projectId: "signal-app-8852e",
    storageBucket: "signal-app-8852e.appspot.com",
    messagingSenderId: "945847861731",
    appId: "1:945847861731:web:bb00bbf1b0566921f1a0d6"
  };

  let app;

  if (firebase.apps.length==0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export  { db, auth };
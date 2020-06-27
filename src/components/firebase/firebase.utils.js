import firebase from 'firebase/app';

import'firebase/firestore';
import'firebase/auth';


const config={
    apiKey: "AIzaSyChnTijp3X576OLsjSeW6W0FLkm1N8IiE4",
    authDomain: "cloth-ecommerce-plateform.firebaseapp.com",
    databaseURL: "https://cloth-ecommerce-plateform.firebaseio.com",
    projectId: "cloth-ecommerce-plateform",
    storageBucket: "cloth-ecommerce-plateform.appspot.com",
    messagingSenderId: "259902111319",
    appId: "1:259902111319:web:d8628f914a8a20e7646d12",
    measurementId: "G-P3BDC26Z7G"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const  provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
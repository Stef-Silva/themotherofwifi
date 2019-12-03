import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXvD6AJjP6LTI-oSstcg1WunX9EYL2p2o",
    authDomain: "the-mother-of-wifi.firebaseapp.com",
    databaseURL: "https://the-mother-of-wifi.firebaseio.com",
    projectId: "the-mother-of-wifi",
    storageBucket: "the-mother-of-wifi.appspot.com",
    messagingSenderId: "864840651487",
    appId: "1:864840651487:web:03c656b3e23432609fcf6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAKoBc8vKsiSaFck8qsCiTJOzXfs8Kz888",
    authDomain: "education-d942d.firebaseapp.com",
    databaseURL: "https://education-d942d.firebaseio.com",
    projectId: "education-d942d",
    storageBucket: "education-d942d.appspot.com",
    messagingSenderId: "931089781187",
    appId: "1:931089781187:web:4a2954ebfa2dbe1b3eed76",
    measurementId: "G-DVQ2M0S2R8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


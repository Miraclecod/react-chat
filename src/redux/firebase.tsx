import * as firebase from "firebase";
import  "firebase/firestore";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBvgM3CWoJYEcoAokL3qFXXplE5cZQ3lIM",
    authDomain: "education-b755f.firebaseapp.com",
    databaseURL: "https://education-b755f.firebaseio.com",
    projectId: "education-b755f",
    storageBucket: "education-b755f.appspot.com",
    messagingSenderId: "620539073542",
    appId: "1:620539073542:web:67c10d9f011ba69c679f87"
};
let defaultApp = firebase.initializeApp(firebaseConfig);
let database = firebase.database();
// Initialize Firebase

export const auth = defaultApp.auth();

const structureChat = {
    "chats": {
        "one": {
            "title": "test",
            "lastMessage": "test",
            "time": "12:30"
        }
    },
    "messages": {
        "one": {
            "m1": {
                "name": "User",
                "message": "thank you",
                "time": ""
            }
        }
    }
}
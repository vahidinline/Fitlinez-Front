import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAm5d4V7-WJp1XKzPigBIzGkMtyrun0Wbc",
    authDomain: "godietapp-7b949.firebaseapp.com",
    databaseURL: "https://godietapp-7b949-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "godietapp-7b949",
    storageBucket: "godietapp-7b949.appspot.com",
    messagingSenderId: "667014060367",
    appId: "1:667014060367:web:ad25cd71ba90d50776cd3a"
};

const app = initializeApp(firebaseConfig);

export { firebase, firebaseConfig };

export const auth = getAuth(app);

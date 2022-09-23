import { initializeApp } from 'firebase/app'; 
import { getAuth } from "firebase/auth"; 
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBUCbAPGIPdCM5pC0g0M-tfjY9QoymaMZA",
    authDomain: "weather--auth.firebaseapp.com",
    projectId: "weather--auth",
    storageBucket: "weather--auth.appspot.com",
    messagingSenderId: "238720834252",
    appId: "1:238720834252:web:b15f2d74aa00d304af8069"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
export const db = getDatabase(app)
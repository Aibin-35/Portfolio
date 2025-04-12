import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUo2hs8Rr4IaNIoTtg3kVzwjEZFQ4csX0",
    authDomain: "portfollio-8fffa.firebaseapp.com",
    projectId: "portfollio-8fffa",
    storageBucket: "portfollio-8fffa.firebasestorage.app",
    messagingSenderId: "331032838123",
    appId: "1:331032838123:web:b99565db1360a25e5863ae",
    measurementId: "G-8QCW99E30F"
  };
// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
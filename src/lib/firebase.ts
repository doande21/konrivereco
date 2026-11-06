import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy, Timestamp } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyAbD91ZghVHYRZ-DVLtgjx8tGs5wdMw2vQ",
  authDomain: "konrivereco.firebaseapp.com",
  projectId: "konrivereco",
  storageBucket: "konrivereco.firebasestorage.app",
  messagingSenderId: "214056236108",
  appId: "1:214056236108:web:21a00687ca9b6370f4b0e9",
  measurementId: "G-C4DWRWYD6W"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { app, collection, addDoc, setDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy, Timestamp };

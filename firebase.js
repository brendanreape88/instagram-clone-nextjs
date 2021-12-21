// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjYvmZe88QGBXGxXC1ycJ4NMLULYVz4BI",
  authDomain: "instagram-clone-9f68e.firebaseapp.com",
  projectId: "instagram-clone-9f68e",
  storageBucket: "instagram-clone-9f68e.appspot.com",
  messagingSenderId: "694351832913",
  appId: "1:694351832913:web:00bb45b9eefd4aeff15570",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

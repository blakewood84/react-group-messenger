// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxYZT64xeZ4lGey3zkJbz97vUVYknRJIQ",
  authDomain: "slack-clone-3aec8.firebaseapp.com",
  projectId: "slack-clone-3aec8",
  storageBucket: "slack-clone-3aec8.appspot.com",
  messagingSenderId: "624154899290",
  appId: "1:624154899290:web:c058606ea6695a8791b963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore();

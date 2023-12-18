// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY_B6ERHz6YDr6-d1O9cGzjrhYP0CA7O4",
  authDomain: "test-app-8f8e6.firebaseapp.com",
  projectId: "test-app-8f8e6",
  storageBucket: "test-app-8f8e6.appspot.com",
  messagingSenderId: "274831512734",
  appId: "1:274831512734:web:3924877f0ddbc82b34978f",
  measurementId: "G-9GE80V0TL2",
  databaseURL: "https://test-app-8f8e6-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
 export const fireapp = initializeApp(firebaseConfig);

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnWawN0VCgEQ70U4VGBrhNbgF69_1ugnw",
  authDomain: "gif-auth-app-b6953.firebaseapp.com",
  projectId: "gif-auth-app-b6953",
  storageBucket: "gif-auth-app-b6953.appspot.com",
  messagingSenderId: "875466836088",
  appId: "1:875466836088:web:0a81fe08d2e110080fc58d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
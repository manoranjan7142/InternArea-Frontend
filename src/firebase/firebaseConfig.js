
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsTJn0TefyteM2WaTlzfmwfQbqKI-Bo8I",
  authDomain: "internarea-5a8f3.firebaseapp.com",
  projectId: "internarea-5a8f3",
  storageBucket: "internarea-5a8f3.appspot.com",
  messagingSenderId: "303525543242",
  appId: "1:303525543242:web:091dcd4682239ae11515b3",
  measurementId: "G-6STTDHEPYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};
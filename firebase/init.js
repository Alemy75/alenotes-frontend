import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ygZjN0JtvGQhLK5hxlw5RtunBjACb3Y",
  authDomain: "willberries-3389e.firebaseapp.com",
  databaseURL: "https://willberries-3389e-default-rtdb.firebaseio.com",
  projectId: "willberries-3389e",
  storageBucket: "willberries-3389e.appspot.com",
  messagingSenderId: "858341095624",
  appId: "1:858341095624:web:9e129be2005ebffb304dfd",
  measurementId: "G-RZ8NTJ90M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Database configure
const db = getFirestore()

export default db
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCds9U3iLYvy9pWNp24xrzkEMyQFr7uPDw",
  authDomain: "heelbaba-dc987.firebaseapp.com",
  projectId: "heelbaba-dc987",
  storageBucket: "heelbaba-dc987.appspot.com",
  messagingSenderId: "1095153609190",
  appId: "1:1095153609190:web:3e8a228c6748aac2680e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 
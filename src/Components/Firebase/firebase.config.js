// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_8BpZgmQhAsCjQgnS8PV2tNKIjg3gs8",
  authDomain: "drivewave-c7ec5.firebaseapp.com",
  projectId: "drivewave-c7ec5",
  storageBucket: "drivewave-c7ec5.appspot.com",
  messagingSenderId: "895230922694",
  appId: "1:895230922694:web:c4500ceb40d00281b46cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
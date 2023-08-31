// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTwiRKfATET-uI-szwEKG_NKGD_r88aQQ",
  authDomain: "resdium-6ac5a.firebaseapp.com",
  projectId: "resdium-6ac5a",
  storageBucket: "resdium-6ac5a.appspot.com",
  messagingSenderId: "649255884121",
  appId: "1:649255884121:web:cf072d26fe9f4d598a2848",
  measurementId: "G-V20QTZHZM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
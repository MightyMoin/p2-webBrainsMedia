// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_DOMAIN,
  REACT_APP_FIREBASE_MSG_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  projectId: "p2-slack-frontend",
  storageBucket: "p2-slack-frontend.appspot.com",
  messagingSenderId: REACT_APP_FIREBASE_MSG_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

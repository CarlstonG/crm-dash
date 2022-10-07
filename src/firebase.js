import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crm-solutions-8f773.firebaseapp.com",
  projectId: "crm-solutions-8f773",
  storageBucket: "crm-solutions-8f773.appspot.com",
  messagingSenderId: "273180083572",
  appId: process.env.REACT_APP_ID,
  measurementId: "G-WTJ911MXYB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
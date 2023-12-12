import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVVyo_o0RhzMwhLb_Me6pnPht17FmJfRk",
  authDomain: "santa-76378.firebaseapp.com",
  projectId: "santa-76378",
  storageBucket: "santa-76378.appspot.com",
  messagingSenderId: "668214945391",
  appId: "1:668214945391:web:27423910de6abb6da40f9a",
  measurementId: "G-NDNKPZYD0Q"
};

export const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const analytics = getAnalytics(app);
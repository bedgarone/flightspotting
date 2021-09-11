// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAhJdg6JxAQOEtF_-wOJiDNVCl1upb-Eek",
  authDomain: "flightspotting-509d5.firebaseapp.com",
  projectId: "flightspotting-509d5",
  storageBucket: "flightspotting-509d5.appspot.com",
  messagingSenderId: "751017842077",
  appId: "1:751017842077:web:ea35ea4743bd541e814b74",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

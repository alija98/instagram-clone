import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKxMCwj-quJCoz9941v4bth3LZPuRTVBw",
  authDomain: "instagram-30729.firebaseapp.com",
  projectId: "instagram-30729",
  storageBucket: "instagram-30729.appspot.com",
  messagingSenderId: "373156911265",
  appId: "1:373156911265:web:a7ff5de7734e6d777678e0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

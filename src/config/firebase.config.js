import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbsSCqMqBxmonvIRvREdK6GZjglOYvMrw",
  authDomain: "image-uploader-fa13f.firebaseapp.com",
  projectId: "image-uploader-fa13f",
  storageBucket: "image-uploader-fa13f.appspot.com",
  messagingSenderId: "283966777823",
  appId: "1:283966777823:web:817990a098ec32ff8b3c6a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

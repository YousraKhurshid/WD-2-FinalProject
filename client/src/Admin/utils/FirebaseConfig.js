// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCckHkFCPgfm_06mTsMQAbudVBxzkBqOU0",
  authDomain: "category-api-storage.firebaseapp.com",
  projectId: "category-api-storage",
  storageBucket: "category-api-storage.appspot.com",
  messagingSenderId: "54293002827",
  appId: "1:54293002827:web:57283fe02bb47d917a2bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage }; 
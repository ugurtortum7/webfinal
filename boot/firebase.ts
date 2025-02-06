import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase yapılandırması
const firebaseConfig = {

    apiKey: "AIzaSyAlci5-AAe38iVV-74owbho5g6fCW5LUpc",
  
    authDomain: "webfinal-dfb24.firebaseapp.com",
  
    projectId: "webfinal-dfb24",
  
    storageBucket: "webfinal-dfb24.firebasestorage.app",
  
    messagingSenderId: "901174912552",
  
    appId: "1:901174912552:web:ba64ffd5e1b2cc3cd6b71d"
  
  };
  

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Auth ve Firestore servislerini al
const auth = getAuth(app);
const db = getFirestore(app);

// Export both as named exports
export { auth, db, db as firestore };
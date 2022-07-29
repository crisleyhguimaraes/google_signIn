
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';




const firebaseConfig = {
  apiKey: 'AIzaSyCx0cRCm1ry30z9XvP1HzgUk14f4UtyeJ4',
  authDomain: 'auth-729b2.firebaseapp.com',
  projectId: 'auth-729b2',
  storageBucket: 'auth-729b2.appspot.com',
  messagingSenderId: '1034539894374',
  appId: '1:1034539894374:web:6a207107bfd6c375ce8fa7',
  measurementId: 'G-42MY2J78DG'
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

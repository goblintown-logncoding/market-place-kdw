import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeXF5c0xf1VkZiQC01M7yt4THm_Hi6jhc',
  authDomain: 'marketplace-kdw.firebaseapp.com',
  projectId: 'marketplace-kdw',
  storageBucket: 'marketplace-kdw.appspot.com',
  messagingSenderId: '236715392216',
  appId: '1:236715392216:web:ab8da2ddeef886400cabad'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

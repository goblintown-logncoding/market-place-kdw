import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const getAllDocsInProductCollection = async () => {
  const querySnapshot = await getDocs(collection(db, 'product'));
  return querySnapshot.docs.map((snapshot) => snapshot.data());
};

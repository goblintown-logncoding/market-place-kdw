import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const updateQuantityByProductNumber = async () => {};

export const getAllDocsInProductCollection = async () => {
  const querySnapshot = await getDocs(collection(db, 'product'));
  return querySnapshot.docs.map((snapshot) => snapshot.data());
};

export const getAllDocsInShoppingCartCollection = async () => {
  const querySnapshot = await getDocs(collection(db, 'shopping-cart'));
  return querySnapshot.docs.map((snapshot) => snapshot.data());
};

export const setDocInShoppingCartCollection = async (productInfo) => {
  const productNumber = productInfo.productNumber;
  const productRef = doc(db, 'shopping-cart', productNumber);
  const productDoc = await getDoc(productRef);
  let quantity = 1;
  if (productDoc.exists()) {
    quantity = productDoc.data().quantity + 1;
  }
  const shoppingCartRef = collection(db, 'shopping-cart');
  await setDoc(doc(shoppingCartRef, productNumber), {
    ...productInfo,
    quantity
  });
};

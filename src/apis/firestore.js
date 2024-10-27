import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const deleteProduct = async (productNumber) => {
  deleteDoc(doc(db, 'shopping-cart', productNumber));
};

export const updateQuantityByProductNumber = async (productNumber, quantity) => {
  const productRef = doc(db, 'shopping-cart', productNumber);
  updateDoc(productRef, { quantity }).catch((err) => {
    console.error('Error updating document ' + err);
  });
};

export const getAllDocsInProductCollection = async () => {
  const querySnapshot = await getDocs(collection(db, 'product'));
  return querySnapshot.docs.map((snapshot) => snapshot.data());
};

export const getAllDocsInShoppingCartCollection = async () => {
  const querySnapshot = await getDocs(collection(db, 'shopping-cart'));
  return querySnapshot.docs.map((snapshot) => snapshot.data());
};

export const getQuantity = async () => {
  const querySnapshot = await getDocs(collection(db, 'shopping-cart'));
  let counter = 0;
  querySnapshot.docs
    .map((snapshot) => snapshot.data())
    .forEach((e) => {
      counter += e.quantity;
    });
  return counter;
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

export const addProduct = async (params) => {
  // Todo: Implement adding product to firebase using "addDoc"
  await addDoc(collection(db, 'product'), params);
};

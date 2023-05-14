import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'pizza-13e1a.firebaseapp.com',
  projectId: 'pizza-13e1a',
  storageBucket: 'pizza-13e1a.appspot.com',
  messagingSenderId: '347294140380',
  appId: '1:347294140380:web:46acec65d0afe2781cb119',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const createOrderDocument = async (order) => {
  if (!order) return;

  const orderRef = doc(firestore, `orders/${order.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(orderRef, {
        userId: order.uid,
        shippingDetails: { ...order.shippingDetails },
        items: [...order.items],
        shippingPrice: order.shippingPrice,
        subTotal: order.subTotal,
        total: order.total,
        status: 'pendiente',
        createdAt,
      });
    } catch (error) {
      console.log('error creating order', error.message);
    }
  }
  return orderRef;
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const firestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

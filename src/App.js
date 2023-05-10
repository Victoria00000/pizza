import React, { useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './components/navbar/Navbar.js';
import { useOpenFood } from './hooks/useOpenFood.js';
import { Orders } from './components/orders/Orders.js';
import { Home } from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Checkout } from './pages/Checkout.js';
import { Login } from './pages/Login.js';
import { useSelector, useDispatch } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util.js';
import * as userActions from './redux/user/userAction.js';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

function onAuthStateChange(cb, action) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = await createUserProfileDocument(user);
      onSnapshot(userRef, (snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

export const App = () => {
  const openFood = useOpenFood();

  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Orders />
        <Routes>
          <Route path="/" element={<Home openFood={openFood} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

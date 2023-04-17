import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './components/navbar/Navbar.js';
import { useOpenFood } from './hooks/useOpenFood.js';
import { Orders } from './components/orders/Orders.js';
import { Home } from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Checkout } from './pages/Checkout.js';

export const App = () => {
  const openFood = useOpenFood();

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Orders></Orders>
        <Routes>
          <Route path="/" element={<Home openFood={openFood} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

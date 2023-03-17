import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './components/navbar/Navbar.js';
import { Banner } from './components/banner/Banner.js';
import { Menu } from './components/menu/Menu.js';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Banner>
        <h2> Las mejores pizzas de la zona </h2>
        <p> Pedí online, rápido y fácil </p>
      </Banner>
      <Menu></Menu>
    </>
  );
};

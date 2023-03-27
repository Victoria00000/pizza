import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './components/navbar/Navbar.js';
import { Banner } from './components/banner/Banner.js';
import { Menu } from './components/menu/Menu.js';
import { FoodDialog } from './components/foodDialog/FoodDialog.js';
import { useOpenFood } from './hooks/useOpenFood.js';

export const App = () => {
  const openFood = useOpenFood();

  return (
    <>
      <GlobalStyles />
      <FoodDialog {...openFood} />
      <Navbar />
      <Banner>
        <h2> Las mejores pizzas de la zona </h2>
        <p> Pedí online, rápido y fácil </p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
};

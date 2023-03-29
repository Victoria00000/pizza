import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './components/navbar/Navbar.js';
import { Banner } from './components/banner/Banner.js';
import { Menu } from './components/menu/Menu.js';
import { FoodDialog } from './components/foodDialog/FoodDialog.js';
import { useOpenFood } from './hooks/useOpenFood.js';
import { Orders } from './components/orders/Orders.js';
import { useOrders } from './hooks/useOrders.js';

export const App = () => {
  const openFood = useOpenFood();
  const orders_ = useOrders();

  return (
    <>
      <GlobalStyles />
      <FoodDialog {...openFood} {...orders_} />
      <Navbar />
      <Orders {...orders_}></Orders>
      <Banner>
        <h2> Las mejores pizzas de la zona </h2>
        <p> Pedí online, rápido y fácil </p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
};

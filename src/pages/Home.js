import React from 'react';
import { Menu } from '../components/menu/Menu';
import { Banner } from '../components/banner/Banner';
import { FoodDialog } from '../components/foodDialog/FoodDialog';

export const Home = ({ openFood }) => {
  return (
    <>
      <FoodDialog {...openFood} />
      <Banner>
        <h2> Las mejores pizzas de la zona </h2>
        <p> Pedí online, rápido y fácil </p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
};

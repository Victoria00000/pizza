import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../data/data';
import { ItemStyled, FoodGridStyled, LabelStyled } from './FoodGrid.js';

//estilos del componente Menu
export const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 350px 50px 20px;
  z-index: 3;
`;

//componente Menu
export const Menu = ({ setOpenFood }) => {
  const FoodItems = useSelector((state) => {
    //console.log(state.products.foods);
    return state.products.foods;
  });

  return (
    <>
      <MenuStyled>
        {Object.entries(FoodItems).map(([sectionName, items]) => {
          return (
            <>
              <h3> {sectionName} </h3>
              <FoodGridStyled>
                {items.map((item) => (
                  <ItemStyled img={item.img} onClick={() => setOpenFood(item)}>
                    <LabelStyled> {item.name} </LabelStyled>
                    <LabelStyled> {formatPrice(item.price)} </LabelStyled>
                  </ItemStyled>
                ))}
              </FoodGridStyled>
            </>
          );
        })}
      </MenuStyled>
    </>
  );
};

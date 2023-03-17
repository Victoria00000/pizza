import React from 'react';
import styled from 'styled-components';
import { FoodItems } from '../../data/data';
import { ItemStyled, FoodGridStyled } from './FoodGrid.js';

//estilos del componente Menu
export const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 0px 20px;
`;

//componente Menu
export const Menu = () => {
  return (
    <>
      <MenuStyled>
        {Object.entries(FoodItems).map(([sectionName, items]) => {
          return (
            <>
              <h3> {sectionName} </h3>
              <FoodGridStyled>
                {items.map((item) => (
                  <ItemStyled img={item.img}> {item.name} </ItemStyled>
                ))}
              </FoodGridStyled>
            </>
          );
        })}
      </MenuStyled>
    </>
  );
};

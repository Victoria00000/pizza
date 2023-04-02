import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import styled from 'styled-components';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCountStyled = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIcon = () => {
  return (
    <CartIconStyled>
      <ShoppingIcon style={{ width: '24px', height: '24px' }} />
      <CartIconStyled> {0} </CartIconStyled>
    </CartIconStyled>
  );
};

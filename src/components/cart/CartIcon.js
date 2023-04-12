import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cartActions';

//estilos
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

// componentes
export const CartIcon = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartIconStyled onClick={handleToggle}>
      <ShoppingIcon style={{ width: '24px', height: '24px' }} />

      <ItemCountStyled> {0} </ItemCountStyled>
    </CartIconStyled>
  );
};

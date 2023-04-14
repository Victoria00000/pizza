import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cartActions';

// estilos //
const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCountStyled = styled.div`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
  margin: 18px;
`;

// componentes //
export const CartIcon = () => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
  );

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <>
      <CartIconStyled onClick={handleToggle}>
        <ShoppingIcon style={{ width: '24px', height: '24px' }} />
        <ItemCountStyled> {quantity} </ItemCountStyled>
      </CartIconStyled>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import {
  DialogContentStyled,
  DialogFooterStyled,
  DialogButtonStyled,
  DialogShadow,
} from '../foodDialog/FoodDialog';
import { formatPrice } from '../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { Quantity } from './Quantity';
import * as cartActions from '../../redux/cart/cartActions';
import { Link } from 'react-router-dom';

// estilos //
export const OrdersStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 135px;
  width: 340px;
  border-radius: 8px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 3;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
`;

export const OrdersContentStyled = styled(DialogContentStyled)`
  padding: 20px;
  max-height: 100%;
  height: 80%;
`;

export const OrdersContainerStyled = styled.div`
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

export const OrdersItemStyled = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: center;
`;

export const ItemImgStyled = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

// componentes //
export const Orders = () => {
  const hidden = useSelector((state) => state.cart.hidden);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  const total = cartItems.reduce(
    (accumulate, item) => accumulate + item.price * item.quantity,
    0
  );

  return (
    <>
      {hidden && <DialogShadow onClick={handleToggle} />}

      <OrdersStyled show={hidden}>
        {!cartItems ? (
          <OrdersContentStyled> Nada por acá... </OrdersContentStyled>
        ) : (
          <OrdersContentStyled>
            <OrdersContainerStyled> Tu pedido: </OrdersContainerStyled>
            <OrdersContainerStyled>
              {cartItems.map((item) => {
                return (
                  <OrdersContainerStyled key={item.id}>
                    <OrdersItemStyled>
                      <ItemImgStyled img={item.img} />
                      <div>
                        <div> {item.name} </div>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <div>
                        <Quantity item={item} />
                      </div>
                    </OrdersItemStyled>
                  </OrdersContainerStyled>
                );
              })}
            </OrdersContainerStyled>
          </OrdersContentStyled>
        )}
        <DialogFooterStyled>
          <Link to="/checkout">
            <DialogButtonStyled>
              Ir a pagar: {formatPrice(total)}
            </DialogButtonStyled>
          </Link>
        </DialogFooterStyled>
      </OrdersStyled>
    </>
  );
};

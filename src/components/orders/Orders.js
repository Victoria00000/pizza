import React from 'react';
import styled from 'styled-components';
import {
  DialogContentStyled,
  DialogFooterStyled,
  DialogButtonStyled,
} from '../foodDialog/FoodDialog';
import { formatPrice } from '../../data/data';
import { useSelector } from 'react-redux';

// estilos //
export const OrdersStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 135px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100)`)};
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
  border-bottom: 1px solid grey;
`;

export const OrdersItemStyled = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

// componentes //
export const Orders = ({ orders }) => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <OrdersStyled show={hidden}>
      {!orders ? (
        <OrdersContentStyled> Nada por acá... </OrdersContentStyled>
      ) : (
        <OrdersContentStyled>
          <OrdersContainerStyled> Tu pedido: </OrdersContainerStyled>
          <OrdersContainerStyled>
            {orders.map((order) => {
              return (
                <OrdersContainerStyled>
                  <OrdersItemStyled>
                    <div> 1 </div>
                    <div> {order.name} </div>
                    <div> {formatPrice(order.price)} </div>
                  </OrdersItemStyled>
                </OrdersContainerStyled>
              );
            })}
          </OrdersContainerStyled>
        </OrdersContentStyled>
      )}
      <DialogFooterStyled>
        <DialogButtonStyled> Ir a pagar </DialogButtonStyled>
      </DialogFooterStyled>
    </OrdersStyled>
  );
};

import React from 'react';
import styled from 'styled-components';

// estilos //
export const OrdersStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 145px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

//componentes //
export const Orders = () => {
  return <OrdersStyled>Orders</OrdersStyled>;
};

import React from 'react';
import styled from 'styled-components';

// estilos //
export const CheckoutStyled = styled.div`
  max-width: 1440px;
  min-height: 900px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

export const WrapperStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 100px;
`;

// componentes //
export const Checkout = () => {
  return (
    <CheckoutStyled>
      <WrapperStyled>
        <div style={{ backgroundColor: 'blue' }}> uno </div>
        <div style={{ backgroundColor: 'red' }}> dos </div>
      </WrapperStyled>
    </CheckoutStyled>
  );
};

import React from 'react';
import { LayoutStyled, WrapperStyled } from '../components/UI';
import { ShippingForm } from '../components/shippingForm/ShippingForm';

export const Checkout = () => {
  return (
    <LayoutStyled>
      <WrapperStyled>
        <ShippingForm />
      </WrapperStyled>
    </LayoutStyled>
  );
};

import React from 'react';
import { LayoutStyled, WrapperStyled } from '../components/UI';
import { ShippingForm } from '../components/shippingForm/ShippingForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/login');
  }

  return (
    <LayoutStyled>
      <WrapperStyled>
        <ShippingForm />
      </WrapperStyled>
    </LayoutStyled>
  );
};

import React, { useEffect } from 'react';
import { Input, FormContentStyled, FormStyled } from '../UI';
import useForm from '../../hooks/useForm';
import { CardSummary } from '../cardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { COSTO_ENVIO } from '../../utils';
import { useNavigate } from 'react-router-dom';
import * as orderActions from '../../redux/orders/orderActions';
import { Spinner } from '../UI/Spinner';

// ShippingForm component //
export const ShippingForm = () => {
  //
  const currentUser = useSelector((state) => state.user.currentUser);

  const { cartItems } = useSelector((state) => state.cart);

  const { purchased } = useSelector((state) => state.orders);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!formState.isValid) {
      alert('Debes completar todos los campos');
      return;
    }

    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTO_ENVIO,
      subtotal: subTotal,
      total: COSTO_ENVIO + subTotal,
    };

    dispatch(orderActions.createOrder(orderData));
  };

  if (purchased) {
    dispatch(orderActions.purchaseInit());
  }

  return (
    <>
      <FormStyled onSubmit={handlerSubmit}>
        <FormContentStyled>
          <Input
            id="domicilio"
            label="Domicilio"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Domicilio requerido"
            type="text"
          />
          <Input
            id="localidad"
            label="Localidad"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Localidad requerida"
            type="text"
          />
        </FormContentStyled>
        <CardSummary
          isValid={formState.isValid}
          subTotal={subTotal}
          envio={COSTO_ENVIO}
        />
      </FormStyled>
    </>
  );
};

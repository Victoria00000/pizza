import React from 'react';
import { Input, FormContentStyled, FormStyled } from '../UI';
import useForm from '../../hooks/useForm';
import { CardSummary } from '../cardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { COSTO_ENVIO } from '../../utils';

// ShippingForm component //
export const ShippingForm = () => {
  //
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

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

    if (formState.isValid) {
      return alert('Datos enviados');
    } else {
      return alert('Debes completar todos los campos');
    }
  };

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

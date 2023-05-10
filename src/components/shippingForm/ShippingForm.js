import React from 'react';
import { Input, FormContentStyled, FormStyled } from '../UI';
import useForm from '../../hooks/useForm';
import { CardSummary } from '../cardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils';

export const ShippingForm = () => {
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
      return alert('Debes completar los campos');
    } else {
      return alert('Datos enviados');
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
        <CardSummary formState={formState} />
      </FormStyled>
    </>
  );
};

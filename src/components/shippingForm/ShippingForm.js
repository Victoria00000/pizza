import React from 'react';
import { Input, FormContentStyled, FormStyled } from '../UI';
import useForm from '../../hooks/useForm';
//import { VALIDATOR_REQUIRE } from '../../utils';

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

  return (
    <form>
      <FormStyled>
        <FormContentStyled>
          <Input
            id="domicilio"
            label="Domicilio"
            onInput={inputHandler}
            //validators={[VALIDATOR_REQUIRE]}
            required
            errorText="Domicilio requerido"
            type="text"
          />
          <Input
            id="localidad"
            label="Localidad"
            onInput={inputHandler}
            //validators={[VALIDATOR_REQUIRE]}
            required
            errorText="Localidad requerida"
            type="text"
          />
        </FormContentStyled>
      </FormStyled>
    </form>
  );
};

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  WrapperStyled,
  LayoutStyled,
  Input,
  FormContentStyled,
  FormStyled,
  CustomButton,
} from '../components/UI';
import useForm from '../hooks/useForm';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../utils';
import GoogleIconImg from '../assets/google.svg';
import { signInWithGoogle } from '../firebase/firebase.util.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const GoogleButton = styled(CustomButton)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

export const GoogleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Login = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (currentUser) {
      navigate(-1);
    }
  }, [currentUser, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <LayoutStyled>
      <WrapperStyled>
        <FormStyled onSubmit={submitHandler}>
          <FormContentStyled>
            <Input
              id="email"
              label="Email"
              onInput={inputHandler}
              validators={[VALIDATOR_EMAIL()]}
              errorText="Email requerido"
              type="email"
            />

            <Input
              id="password"
              label="Contraseña"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Contraseña requerida"
              type="password"
            />
          </FormContentStyled>

          <ContainerButtons>
            <CustomButton> Ingresar </CustomButton>
            <GoogleButton onClick={signInWithGoogle}>
              <GoogleIcon src={GoogleIconImg} alt="Google" />
              <p>Ingresar con Google</p>
            </GoogleButton>
          </ContainerButtons>
        </FormStyled>
      </WrapperStyled>
    </LayoutStyled>
  );
};

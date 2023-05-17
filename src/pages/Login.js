import React, { useEffect, useState } from 'react';
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
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils';
import GoogleIconImg from '../assets/google.svg';
import {
  signInWithGoogle,
  auth,
  createUserProfileDocument,
} from '../firebase/firebase.util.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { red } from '../styles/utilities';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Estilos //
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
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

export const AlinkStyled = styled.a`
  color: ${red};
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Componente  login  //
export const Login = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const CurrentUser = await currentUser;
      if (CurrentUser) {
        navigate('/');
      }
    }
    checkUser();
  }, [currentUser]);

  const [formState, inputHandler, setFormData] = useForm(
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

  const submitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        await auth.signInWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          formState.inputs.email.value,
          formState.inputs.password.value
        );
        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
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
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <LayoutStyled>
      <WrapperStyled>
        <FormStyled onSubmit={submitHandler}>
          <FormContentStyled>
            {!isLoginMode && (
              <Input
                id="displayName"
                label="Nombre"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Nombre requerido"
                type="text"
              />
            )}

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
            <CustomButton>
              {isLoginMode ? 'Ingresar' : 'Registrarse'}
            </CustomButton>
            <GoogleButton onClick={signInWithGoogle}>
              <GoogleIcon src={GoogleIconImg} alt="Google" />
              <p>Ingresar con Google</p>
            </GoogleButton>
          </ContainerButtons>

          <ContainerButtons>
            <span>
              {isLoginMode
                ? '¿Todavia no tienes una cuenta?'
                : 'Ya tienes una cuenta?'}
            </span>
            <AlinkStyled onClick={switchModeHandler}>
              {!isLoginMode ? 'Ingresar' : 'Registrarse'}
            </AlinkStyled>
          </ContainerButtons>
        </FormStyled>
      </WrapperStyled>
    </LayoutStyled>
  );
};

import React from 'react';
import styled from 'styled-components';
import PizzaLogo from '../../assets/Pizza-logo.png';
import { CartIcon } from '../cart/CartIcon.js';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/user.svg';
//import { fixed } from '../../styles/utilities';
import { auth } from '../../firebase/firebase.util';

//estilos del component navbar
export const NavbarStyled = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
`;

//estilos de la img-logo
export const LogoStyled = styled.img`
  max-height: 110px;
  height: auto;
`;

//estilos de user
export const UserStyled = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-family: 'Poppins-SemiBold', Helvetica, Arial, sans-serif;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

// contenedor del navbar
export const NavbarContainerStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;

//componente Navbar
export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <Link to="/">
          <LogoStyled src={PizzaLogo} />
        </Link>

        <NavbarContainerStyled>
          <CartIcon />
          <Divider />
          <Link to="/login">
            <LoginButton> Ingresar </LoginButton>
          </Link>
          <UserStyled src={userIcon} onClick={() => auth.signOut()} />
        </NavbarContainerStyled>
      </NavbarStyled>
    </>
  );
};

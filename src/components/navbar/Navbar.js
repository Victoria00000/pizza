import React from 'react';
import styled from 'styled-components';
import PizzaLogo from '../../assets/Pizza-logo.png';
import { CartIcon } from '../cart/CartIcon.js';
//import { fixed } from '../../styles/utilities';

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

// contenedor del navbar
export const NavbarContainerStyled = styled.div`
  display: flex;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;

//componente Navbar
export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <LogoStyled src={PizzaLogo} />
        <NavbarContainerStyled>
          <CartIcon />
        </NavbarContainerStyled>
      </NavbarStyled>
    </>
  );
};

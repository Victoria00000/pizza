import React from 'react';
import styled from 'styled-components';
import PizzaLogo from '../assets/Pizza-logo.png';

//estilos del component
const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  background-color: black;
  width: 100%;
  z-index: 999;
`;

//estilos de la img
const LogoStyled = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 100px;
`;

//component
export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <LogoStyled src={PizzaLogo} />
      </NavbarStyled>
    </>
  );
};

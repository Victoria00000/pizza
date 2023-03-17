import React from 'react';
import styled from 'styled-components';
import PizzaLogo from '../../assets/Pizza-logo.png';

//estilos del component navbar
const NavbarStyled = styled.div`
  padding: 10px;
  margin: 20px 0px 0px 20px;
  width: 100%;
  z-index: 999;
`;

//estilos de la img-logo
const LogoStyled = styled.img`
  max-width: 150px;
  height: auto;
  max-height: 100px;
`;

//componente Navbar
export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <LogoStyled src={PizzaLogo} />
      </NavbarStyled>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import * as userActions from '../../redux/user/userAction.js';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { useSelector, useDispatch } from 'react-redux';

const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 100px;
  z-index: 12;
  opacity: 1;
  border: 1px solid #c7c7c7;
  visibility: visible;
  right: 15px;
  min-width: 200px;
  border-radius: 8px;
  background-color: #fff;
`;

const WelcomeTitle = styled.div`
  border-bottom: 1px solid #e5edef;
  width: 100%;
  padding: 15px 20px;
  margin-left: 20px;
`;

const MenuOptions = styled.div`
  width: 100%;
`;

const MenuOptionElement = styled.div`
tranition: all 0.3s linear;
padding: 15px 20px;
color: #7d7d7d;
font-size: 14px;
font-family: 'Poppins-Regular', sans-serif;
cursor: pointer;
&:hover {
  background-color: rgba(255, 68, 31, 0.04);
  color: #ff441f;
`;

const Shadow = styled.div`
  height: vh;
  width: vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

export const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleToggleUserMenu = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggleUserMenu} />}
      {!hiddenMenu ? (
        <UserMenuStyled>
          <WelcomeTitle> Hola, {user.displayName} </WelcomeTitle>
          <MenuOptions>
            <MenuOptionElement> Mis ordenes </MenuOptionElement>
            <MenuOptionElement onClick={() => auth.signOut()}>
              Cerrar sesión
            </MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>
      ) : null}
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import { LabelStyled } from '../menu/FoodGrid';

// Styles
export const FoodDialogStyled = styled.div`
width:500px;
background-color: white;
position: fixed;
top: 158px;
z-index: 5;
max-height: calc(100% - 100px);
left: calc(50% - 250px);
display: flex;
flex-direction: column;
border-radius;8px;
`;

export const DialogBannerStyled = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px opx;
`;

// herencia de estilos
export const DialBannNameStyled = styled(LabelStyled)`
  top: 75px;
  padding: 5px, 10px;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 4;
  background-color: black;
  opacity: 0.7;
`;

// Componentes
export const FoodDialogContainer = ({ openFood }) => {
  return (
    <>
      <DialogShadow />
      <FoodDialogStyled>
        <DialogBannerStyled img={openFood.img}>
          <DialBannNameStyled> {openFood.name} </DialBannNameStyled>
        </DialogBannerStyled>
      </FoodDialogStyled>
    </>
  );
};

export const FoodDialog = (props) => {
  if (!props.openFood) return null;

  return (
    <>
      <FoodDialogContainer {...props} />
    </>
  );
};

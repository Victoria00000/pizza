import React from 'react';
import styled from 'styled-components';
import { LabelStyled } from '../menu/FoodGrid';
import { TitleStyled } from '../../styles/title';
import { red } from '../../styles/colors';
import { formatPrice } from '../../data/data';

// Styles //
export const FoodDialogStyled = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 158px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const DialogBannerStyled = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px;
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

export const DialogContentStyled = styled.div`
  overflow: auto;
  min-height: 100px;
  max-height: 400px;
  margin: 10px;
`;

export const DialogFooterStyled = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  display: flex;
  justify-content: center;
`;

export const DialogButtonStyled = styled(TitleStyled)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 8px;
  width: 200px;
  cursor: pointer;
  background-color: ${red};
  text-align: center;
  padding: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

// Componentes //
export const FoodDialogContainer = ({
  openFood,
  setOpenFood,
  orders,
  setOrders,
}) => {
  const handlerClose = () => {
    setOpenFood();
  };

  const order = { ...openFood };

  const addOrder = () => {
    setOrders([...orders, order]);
    handlerClose();
  };

  return (
    <>
      <DialogShadow onClick={handlerClose} />
      <FoodDialogStyled>
        <DialogBannerStyled img={openFood.img}>
          <DialBannNameStyled> {openFood.name} </DialBannNameStyled>
        </DialogBannerStyled>
        <DialogContentStyled>
          contenido contenido contenido contenido
        </DialogContentStyled>
        <DialogFooterStyled>
          <DialogButtonStyled onClick={addOrder}>
            Agregar: {formatPrice(openFood.price)}
          </DialogButtonStyled>
        </DialogFooterStyled>
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

import React from 'react';
import styled from 'styled-components';
import { LabelStyled } from '../menu/FoodGrid';
import { TitleStyled } from '../../styles/title';
import { red } from '../../styles/utilities';
import { formatPrice } from '../../data/data';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cartActions.js';
// import { above } from '../../styles/utilities';

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
  border-radius: 8px 8px 0px 0px;
`;

// herencia de estilos
export const DialBannNameStyled = styled(LabelStyled)`
  top: 75px;
  padding: 5px 10px;
  border-radius: 8px 8px 0px 0px;
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 3;
`;

export const DialogContentStyled = styled.div`
  overflow: auto;
  min-height: 100px;
  max-height: 400px;
  margin: 10px;
  padding: 20px;
`;

export const DialogFooterStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const DialogButtonStyled = styled(TitleStyled)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: ${red};
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`; //   ${ above.med`background-color: blue` }

// Componentes //
export const FoodDialogContainer = ({ openFood, setOpenFood }) => {
  //
  const dispatch = useDispatch();

  const handlerClose = () => {
    setOpenFood();
  };

  const addOrder = () => {
    dispatch(cartActions.addItem(openFood));
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
          <p> {openFood.description} </p>
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

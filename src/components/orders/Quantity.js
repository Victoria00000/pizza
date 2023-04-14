import React from 'react';
import styled from 'styled-components';
import { TitleStyled } from '../../styles/title';
import { red } from '../../styles/colors';
import RemoveIcon from '../../assets/delete.svg';

// estilos //
export const QuantityStyled = styled(TitleStyled)`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

export const QuantityValueStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

export const QuantityBtnStyled = styled.div`
  font-size: 23px;
  color: ${red};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;

export const RmveItemStyled = styled.img`
  width: 24px;
  height: auto;
  padding: 10px;
  cursor: pointer;
`;

// componentes //
export const Quantity = ({ item }) => {
  return (
    <QuantityStyled>
      {+item.quantity === 1 ? (
        <RmveItemStyled src={RemoveIcon}></RmveItemStyled>
      ) : (
        <QuantityBtnStyled> - </QuantityBtnStyled>
      )}
      <QuantityValueStyled> {item.quantity} </QuantityValueStyled>
      <QuantityBtnStyled> + </QuantityBtnStyled>
    </QuantityStyled>
  );
};

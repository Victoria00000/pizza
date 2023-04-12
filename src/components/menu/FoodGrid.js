import styled from 'styled-components';
import { TitleStyled } from '../../styles/title.js';

// estilos de grilla.
export const FoodGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const LabelStyled = styled(TitleStyled)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  font-size: 15px;
`; //  position: absolute;

// estilos para cada item de la grilla.
//background-image: ${({ img }) => `url(${img})`}; la funcion anonima contiene las props,
//podria ser props.img, pero desestructuradamente es {img}, entonces x cada prop cambia la url!
export const ItemStyled = styled.div`
  height: 175px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  padding: 10px;
  font-size: 25px;
  margin-top: 5px;
  color: black;
  border-radius: 7px;
  transition-property: box-shadow margin-top;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px grey;
  &: hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px grey;
    margin-top: 0px;
  }
`;

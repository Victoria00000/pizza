import styled from 'styled-components';

// estilos de grilla.
export const FoodGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 25px;
  margin-left: 20px;
`;

export const LabelStyled = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  font-size: 15px;
`;

// estilos para cada item de la grilla.
//background-image: ${({ img }) => `url(${img})`}; la funcion anonima contiene las props,
//podria ser props.img, pero desestructuradamente es {img}, entonces x cada prop cambia la url!
export const ItemStyled = styled.div`
  height: 300px;
  width: 300px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  padding: 10px;
  font-size: 25px;
  margin-top: 5px;
  color: #fff;
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

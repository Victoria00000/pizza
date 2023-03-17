import styled from 'styled-components';

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

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 4;
  background-color: black;
  opacity: 0.7;
`;

// Componentes
export const FoodDialogContainer = () => {
  return <div>Container</div>;
};

export const FoodDialog = () => {
  return <div>FoodDialog</div>;
};

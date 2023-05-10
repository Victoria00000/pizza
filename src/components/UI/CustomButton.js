import styled from 'styled-components';
import { red } from '../../styles/utilities';

export const CustomButton = styled.button`
  font-family: 'Montserrat', cursive;
  font-weight: 700;
  z-index: 999;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : '10px')};
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 20px;
  width: ${({ w }) => (w ? `${w}` : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${red};
  ${({ disabled }) =>
    disabled &&
    ` background: #ccc !important;
     color: #fff;
     border: 1px rgb(184, 182, 182) solid;
     cursor: not-allowed !important;
     transition: 0.5s ease-in-out; `}
`;

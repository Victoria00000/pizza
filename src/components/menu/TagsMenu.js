import styled from 'styled-components';
import { gray } from '../../styles/colors.js';

// estilos
export const TagsMenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const TagsCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  color: ${gray};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 0.35rem;
  &:hover {
    background: #e8e8e8;
    box-shadow: none;
  }
`;

export const TagsImgStyled = styled.div`
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 0.75rem;
`;

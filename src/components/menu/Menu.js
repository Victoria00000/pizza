import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../data/data';
import { ItemStyled, FoodGridStyled, LabelStyled } from './FoodGrid.js';
import { TagsCardStyled, TagsImgStyled, TagsMenuStyled } from './TagsMenu';

// estilos del componente Menu //
export const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
  z-index: 3;
`;

// componente Menu //
export const Menu = ({ setOpenFood }) => {
  //
  const FoodItems = useSelector((state) => {
    //console.log(state.products.foods);
    return state.products.foods;
  });
  const categories = useSelector((state) => {
    return state.categories.categories;
  });

  return (
    <>
      <h2> Menu </h2>
      <TagsMenuStyled>
        {categories.map((category) => (
          <TagsCardStyled>
            <TagsImgStyled img={category.imgTag} />
            <p> {category.section} </p>
          </TagsCardStyled>
        ))}
      </TagsMenuStyled>

      <MenuStyled>
        {Object.entries(FoodItems).map(([sectionName, items]) => {
          return (
            <>
              <h3> {sectionName} </h3>
              <FoodGridStyled>
                {items.map((item) => (
                  <ItemStyled img={item.img} onClick={() => setOpenFood(item)}>
                    <LabelStyled>
                      <div> {item.name} </div>
                      <div> {formatPrice(item.price)} </div>
                    </LabelStyled>
                  </ItemStyled>
                ))}
              </FoodGridStyled>
            </>
          );
        })}
      </MenuStyled>
    </>
  );
};

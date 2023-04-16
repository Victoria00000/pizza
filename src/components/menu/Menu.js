import React, { useState } from 'react';
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
  let FoodItems = useSelector((state) => {
    //console.log(state.products.foods);
    return state.products.foods;
  });

  const [section, setSection] = useState(null);

  // Trae el arraySections para formar los botones del menu
  const categories = useSelector((state) => {
    //console.log(state.categories.categories);
    return state.categories.categories;
  });

  // filtro para botones del menu
  if (section) {
    FoodItems = { [section]: FoodItems[section] };
  }

  return (
    <>
      <MenuStyled>
        <h2> Menu </h2>

        <TagsMenuStyled>
          {section && (
            <TagsCardStyled onClick={() => setSection(null)}>
              <p style={{ color: 'black' }}> todos </p>
            </TagsCardStyled>
          )}

          {categories.map((category) => (
            <TagsCardStyled
              key={category.section}
              onClick={() => setSection(category.section)}
              selected={category.section === section}
            >
              <TagsImgStyled img={category.imgTag} />
              <p> {category.section} </p>
            </TagsCardStyled>
          ))}
        </TagsMenuStyled>

        {Object.entries(FoodItems).map(([sectionName, items]) => {
          return (
            <span key={sectionName}>
              <h3> {sectionName} </h3>
              <FoodGridStyled>
                {items.map((item) => (
                  <ItemStyled
                    key={item.id}
                    img={item.img}
                    onClick={() => setOpenFood(item)}
                  >
                    <LabelStyled>
                      <div> {item.name} </div>
                      <div> {formatPrice(item.price)} </div>
                    </LabelStyled>
                  </ItemStyled>
                ))}
              </FoodGridStyled>
            </span>
          );
        })}
      </MenuStyled>
    </>
  );
};

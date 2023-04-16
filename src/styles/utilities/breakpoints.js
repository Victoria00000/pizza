// Media-Querys en styled components //
import { css } from 'styled-components';

// definicion de cada tamaño de pantalla
const size = {
  small: 400,
  med: 960,
  large: 1140,
};

// definimos lo que hará a partir de un tamaño mayor de pantalla
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...arg) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...arg)}
    }
  `;

  return acc;
}, {});

// definimos lo que hará a partir de un tamaño menor de pantalla
export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...arg) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...arg)}
    }
  `;

  return acc;
}, {});

import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Navbar } from './navbar/Navbar.js';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <br />
      <h4> Titulo </h4>
    </div>
  );
};

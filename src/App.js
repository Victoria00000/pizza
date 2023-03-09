import React, { Component } from "react";
import { GlobalStyles } from "./styles/GlobalStyles.js";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <h1> Titulo1</h1>
        <h2> Titulo2</h2>
      </div>
    );
  }
}

export default App;

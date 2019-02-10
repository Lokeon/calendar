import React from "react";
import { createGlobalStyle } from "styled-components";
import Table from "./components/table";
const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

body {
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Table />
  </>
);
export default App;

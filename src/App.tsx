import React from "react";
import { createGlobalStyle } from "styled-components";
import Table from "./components/table";
const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100%;
  margin: 0;
}
`;
const App = () => (
  <>
    <GlobalStyle />
    <Table />
  </>
);
export default App;

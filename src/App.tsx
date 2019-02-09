import React from "react";
import { createGlobalStyle } from "styled-components";
import Table from "./components/table";
const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  flex-direction: column;
}
`;
const App = () => (
  <>
    <GlobalStyle />
    <Table />
  </>
);
export default App;

import React from "react";
import Calendar from "../components/calendar";
import Column from "../components/column";
const IndexPage = () => (
  <Calendar>
    <Column size="1" />
    <Column size="2">1</Column>
    <Column size="2">2</Column>
    <Column size="2">3</Column>
    <Column size="2">4</Column>
    <Column size="2">5</Column>
    <Column size="1" />
  </Calendar>
);

export default IndexPage;

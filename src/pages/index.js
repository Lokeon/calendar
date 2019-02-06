import React from "react";
import Calendar from "../components/calendar";
import Column from "../components/column";
const IndexPage = () => (
  <Calendar>
    <Column size="1" />
    <Column size="2" title="Lunes">
      Lunes
    </Column>
    <Column size="2" title="Martes">
      Lunes
    </Column>
    <Column size="2" title="Miércoles">
      Lunes
    </Column>
    <Column size="2" title="Jueves">
      Lunes
    </Column>
    <Column size="2" title="Viernes">
      Lunes
    </Column>
    <Column size="1" />
  </Calendar>
);

export default IndexPage;

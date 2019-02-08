import React, { Component } from "react";
import initialData from "./data";
export default class Table extends Component {
  state = initialData;
  render(){
    return this.state.order.map((dayId: string) => {
      const day = this.state.days[dayId];
      const subjects = days.subjectIds.map(subjecId => this.state.days[subjecId]);
      return days.title;
    })
  }
}

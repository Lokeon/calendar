import React, { Component } from "react";
import Column from "./../column";
import initialData from "./data";

export default class Table extends Component {
  state = initialData;
  render() {
    return (
      <div style={{margin: 8}}>
      <div className="columns">
        {this.state.order.map((dayId: string) => {
          const day = this.state.days[dayId];
          const subjects = day.subjectIds.map(
            (subjecId: string) => this.state.subjects[subjecId]
          );
          return <Column key={day.id} day={day} subjects={subjects} />;
        })}
      </div>
      </div>
    );
  }
}

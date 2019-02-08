import React, { Component } from "react";
import "./column.scss";
export default class Column extends Component<any, any> {
  render() {
    return (
      <div className="column">
        <div className="custom-col">
          <div className="has-text-centered">
            <h3 className="title">{this.props.day.title}</h3>
          </div>
          <div>cosas</div>
        </div>
      </div>
    );
  }
}

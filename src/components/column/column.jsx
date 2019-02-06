import React, { Component } from "react";
import Weekday from "../weekday";
import "./../style.scss";

export default class Column extends Component {
  render() {
    const { size, title } = this.props;
    return (
      <div className={`column is-${size}`}>
        <Weekday title={title} />
        {this.props.children}
      </div>
    );
  }
}

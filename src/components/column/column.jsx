import React, { Component } from "react";
import "./../style.scss";

export default class Column extends Component {
  render() {
    const { size } = this.props;
    return <div className={`column is-${size}`}>{this.props.children}</div>;
  }
}

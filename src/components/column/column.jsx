import React, { Component } from "react";
import "./../style.scss";
export default class Column extends Component {
  render() {
    return <div className="column is-2">{this.props.children}</div>;
  }
}

import React, { Component } from "react";
import "./../style.scss";
export default class Calendar extends Component {
  render() {
    return (
      <section className="hero is-link">
        <div className="hero-body">
          <div className="columns">{this.props.children}</div>
        </div>
      </section>
    );
  }
}

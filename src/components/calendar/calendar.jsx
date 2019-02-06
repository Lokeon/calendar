import React, { Component } from "react";
import "./../style.scss";
export default class Calendar extends Component {
  render() {
    return (
      <section className="hero is-link is-fullheight">
        <div className="columns">{this.props.children}</div>
      </section>
    );
  }
}

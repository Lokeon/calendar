import React, { Component } from "react";
import "./../../styles.scss";

export default class Subject extends Component {
  render() {
    return (
      <div className="card borde">
        <div className="card-content">
          <div>
            <span className="title is-4">Horas</span>
            <span className="title is-4 is-pulled-right">Aula</span>
          </div>
          <div>
            <p className="has-text-centered asig">Asignatura</p>
            <p className="has-text-centered">Grupo-Tipo de Clase</p>
          </div>
          <div className="weeks">
            <p className="has-text-centered">Semanas</p>
          </div>
        </div>
      </div>
    );
  }
}

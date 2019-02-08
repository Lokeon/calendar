import React, { Component } from "react";
import { SubjectProps } from "../types";
import { Draggable } from "react-beautiful-dnd";

export default class Subject extends Component<SubjectProps> {
  render() {
    const { abrev, classroom } = this.props.subject;
    return (
      <Draggable draggableId={this.props.subject.id} index={this.props.index}>
        {provided => (
          <div
            className="card borde"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card-content">
              <div>
                <span className="title is-4">Horas</span>
                <span className="title is-4 is-pulled-right">{classroom}</span>
              </div>
              <div>
                <p className="has-text-centered asig">{abrev}</p>
                <p className="has-text-centered">Grupo-Tipo de Clase</p>
              </div>
              <div className="weeks">
                <p className="has-text-centered">Semanas</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

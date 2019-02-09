import React, { Component } from "react";
import Subject from "./../subject";
import { ColumnProps, subject } from "../types";
import { Droppable } from "react-beautiful-dnd";

import "./column.scss";

export default class Column extends Component<ColumnProps> {
  render() {
    return (
      <div className="column">
        <div className="custom-col">
          <div className="has-text-centered">
            <h3 className="title">{this.props.day.title}</h3>
          </div>
          <Droppable droppableId={this.props.day.id}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{flexGrow: 1}}>
                {this.props.subjects.map((subject: subject, index: number) => (
                  <Subject key={subject.id} subject={subject} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}

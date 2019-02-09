import React, { Component } from "react";
import { SubjectProps, CardProps } from "../types";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<CardProps>`
  border: 1px solid black;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? "lightgrey" : "white")};
  padding: 4px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  width: 100%;
`;

const Hora = styled.div`
  width: 50%;
  display: inline-block;
  left: 0;
`;

const Aula = styled.div`
  width: 50%;
  display: inline-block;
  right: 0;
  text-align: right;
`;

const Abrev = styled.div`
  font-weight: 800;
  position: relative;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const Clase = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

const Weeks = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

export default class Subject extends Component<SubjectProps> {
  render() {
    const { abrev, classroom, week, group, hours, type } = this.props.subject;
    return (
      <Draggable draggableId={this.props.subject.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Card
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <CardHeader>
              <Hora>{`${hours.start} a ${hours.end}`}</Hora>
              <Aula>{"Aula " + classroom}</Aula>
            </CardHeader>
            <Abrev>{abrev}</Abrev>
            <Clase>{group + " - " + type}</Clase>
            <Weeks>{week.join(" ")}</Weeks>
          </Card>
        )}
      </Draggable>
    );
  }
}

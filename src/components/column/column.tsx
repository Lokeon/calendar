import React, { Component } from "react";
import Subject from "./../subject";
import { ColumnProps, subject, InnerSubjectsProps } from "../types";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Title = styled.h4`
  padding: 4px;
`;
const SubjectsContainer = styled.div`
  padding: 2px;
  flex-grow: 1;
  min-height: 100px;
  overflow: scroll;
  height: 100vh;
`;
const ColumnContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
class InnerSubjects extends Component<InnerSubjectsProps> {
  shouldComponentUpdate(nextProps: InnerSubjectsProps) {
    if (nextProps.subjects === this.props.subjects) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.subjects.map((subject: subject, index: number) => (
      <Subject key={subject.id} subject={subject} index={index} />
    ));
  }
}
export default class Column extends Component<ColumnProps> {
  render() {
    return (
      <ColumnContainer>
        <Title>{this.props.day.title}</Title>
        <Droppable droppableId={this.props.day.id}>
          {provided => (
            <SubjectsContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ flexGrow: 1 }}
            >
              <InnerSubjects subjects={this.props.subjects} />
              {provided.placeholder}
            </SubjectsContainer>
          )}
        </Droppable>
      </ColumnContainer>
    );
  }
}

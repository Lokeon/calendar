import React, { Component } from "react";
import Subject from "./../subject";
import { ColumnProps, subject, InnerSubjectsProps } from "../types";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Title = styled.div`
  padding: 4px;
  margin: 0;
  text-align: center;
  color: #333333;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;
const SubjectsContainer = styled.div`
  flex-grow: 1;
  min-height: 200px;
  overflow: scroll;
  height: 100%;
  padding: 4px;
`;
const ColumnContainer = styled.div`
  margin: 8px;
  border-radius: 3px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(226, 228, 230);
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

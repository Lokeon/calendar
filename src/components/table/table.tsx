import React, { Component } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../column";
import initialData from "./data";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  height: 99.75vh;
`;

export default class Table extends Component {
  state = initialData;

  onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.days[source.droppableId];
    const end = this.state.days[destination.droppableId];

    if (start === end) {
      const newSubjectsIds = Array.from(start.subjectIds);
      newSubjectsIds.splice(source.index, 1);
      newSubjectsIds.splice(destination.index, 0, draggableId);
      const newDay = {
        ...start,
        subjectIds: newSubjectsIds
      };
      const newState = {
        ...this.state,
        days: {
          ...this.state.days,
          [newDay.id]: newDay
        }
      };
      this.setState(newState);
      return;
    }
    if (end.day === this.state.subjects[draggableId].day || end.day === 0) {
      const startSubjectsIds = Array.from(start.subjectIds);
      startSubjectsIds.splice(source.index, 1);
      const newStart = {
        ...start,
        subjectIds: startSubjectsIds
      };
      const endSubjectsIds = Array.from(end.subjectIds);
      endSubjectsIds.splice(destination.index, 0, draggableId);
      const newEnd = {
        ...end,
        subjectIds: endSubjectsIds
      };
      const newState = {
        ...this.state,
        days: {
          ...this.state.days,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd
        }
      };
      this.setState(newState);
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Columns>
          {this.state.order.map((dayId: string) => {
            const day = this.state.days[dayId];
            const subjects = day.subjectIds.map(
              (subjecId: string) => this.state.subjects[subjecId]
            );
            return <Column key={day.id} day={day} subjects={subjects} />;
          })}
        </Columns>
      </DragDropContext>
    );
  }
}

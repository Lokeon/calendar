import React, { Component } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../column";
import initialData from "./data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

const Sidebar = styled.div`
  flex: 1;
  height: 100vh;
  flex-direction: column;
  background-color: #f2f2f2f2;
`;

const Content = styled.div`
  flex: 11;
  max-width: 100%;
  background-color: whitesmoke;
`;

const Columns = styled.div`
  display: flex;
  height: 100vh;
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
    } else if (
      end.day === this.state.subjects[draggableId].day ||
      end.day === 0
    ) {
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
    //console.log(JSON.stringify(this.state));
  };

  allSubjects() {
    const day = this.state.days[this.state.order[0]];
    const subjects = day.subjectIds.map(
      (subjecId: string) => this.state.subjects[subjecId]
    );
    return <Column key={day.id} day={day} subjects={subjects} />;
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          <Sidebar>
            <Columns>{this.allSubjects()}</Columns>
          </Sidebar>
          <Content>
            <Columns>
              {this.state.order.slice(1).map((dayId: string) => {
                const day = this.state.days[dayId];
                const subjects = day.subjectIds.map(
                  (subjecId: string) => this.state.subjects[subjecId]
                );
                return <Column key={day.id} day={day} subjects={subjects} />;
              })}
            </Columns>
          </Content>
        </Container>
      </DragDropContext>
    );
  }
}

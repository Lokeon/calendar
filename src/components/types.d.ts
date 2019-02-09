export interface day {
  id: string;
  title: string;
  subjectIds: string[];
  day: number;
}

export interface days {
  [key: string]: day;
}

export interface duration {
  start: string;
  end: string;
}

export interface subject {
  hours: duration;
  classroom: string;
  name: string;
  abrev: string;
  group: string;
  type: string;
  week: number[];
  day: number;
  course: string;
  id: string;
}

export interface subjects {
  [key: string]: subject;
}

export interface stateData {
  order: string[];
  days: days;
  subjects: subjects;
}

export interface ColumnProps {
  subjects: subject[];
  day: day;
}

export interface SubjectProps {
  subject: subject;
  index: number;
}

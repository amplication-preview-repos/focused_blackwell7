import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { StudentTitle } from "../student/StudentTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const CalendarEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="LessonType" source="lessonType" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Edit>
  );
};

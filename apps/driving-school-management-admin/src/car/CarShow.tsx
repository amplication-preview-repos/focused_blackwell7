import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAR_TITLE_FIELD } from "./CarTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="LicensePlate" source="licensePlate" />
        <TextField label="Model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CalendarEvent"
          target="carId"
          label="CalendarEvents"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="LessonType" source="lessonType" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

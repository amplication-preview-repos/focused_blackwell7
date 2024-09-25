import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CalendarEventTitle } from "../calendarEvent/CalendarEventTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Availability" source="availability" />
        <ReferenceArrayInput source="calendarEvents" reference="CalendarEvent">
          <SelectArrayInput
            optionText={CalendarEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="LicensePlate" source="licensePlate" />
        <TextInput label="Model" source="model" />
      </SimpleForm>
    </Edit>
  );
};

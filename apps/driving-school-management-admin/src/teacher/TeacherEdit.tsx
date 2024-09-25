import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CalendarEventTitle } from "../calendarEvent/CalendarEventTitle";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="calendarEvents" reference="CalendarEvent">
          <SelectArrayInput
            optionText={CalendarEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <SelectArrayInput
          label="Expertise"
          source="expertise"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
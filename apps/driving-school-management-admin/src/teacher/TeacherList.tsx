import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeacherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Teachers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Expertise" source="expertise" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

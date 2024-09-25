import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { CalendarEventList } from "./calendarEvent/CalendarEventList";
import { CalendarEventCreate } from "./calendarEvent/CalendarEventCreate";
import { CalendarEventEdit } from "./calendarEvent/CalendarEventEdit";
import { CalendarEventShow } from "./calendarEvent/CalendarEventShow";
import { SecretaryList } from "./secretary/SecretaryList";
import { SecretaryCreate } from "./secretary/SecretaryCreate";
import { SecretaryEdit } from "./secretary/SecretaryEdit";
import { SecretaryShow } from "./secretary/SecretaryShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"DrivingSchoolManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="CalendarEvent"
          list={CalendarEventList}
          edit={CalendarEventEdit}
          create={CalendarEventCreate}
          show={CalendarEventShow}
        />
        <Resource
          name="Secretary"
          list={SecretaryList}
          edit={SecretaryEdit}
          create={SecretaryCreate}
          show={SecretaryShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
      </Admin>
    </div>
  );
};

export default App;

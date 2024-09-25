import { CalendarEventListRelationFilter } from "../calendarEvent/CalendarEventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  calendarEvents?: CalendarEventListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};

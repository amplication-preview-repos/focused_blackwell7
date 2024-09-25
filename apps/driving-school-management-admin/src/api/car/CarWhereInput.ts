import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CalendarEventListRelationFilter } from "../calendarEvent/CalendarEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarWhereInput = {
  availability?: BooleanNullableFilter;
  calendarEvents?: CalendarEventListRelationFilter;
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  model?: StringNullableFilter;
};

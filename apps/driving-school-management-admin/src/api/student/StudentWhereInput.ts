import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CalendarEventListRelationFilter } from "../calendarEvent/CalendarEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  calendarEvents?: CalendarEventListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  licenseType?: StringNullableFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
};

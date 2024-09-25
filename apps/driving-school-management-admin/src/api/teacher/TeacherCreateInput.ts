import { CalendarEventCreateNestedManyWithoutTeachersInput } from "./CalendarEventCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  calendarEvents?: CalendarEventCreateNestedManyWithoutTeachersInput;
  email?: string | null;
  expertise?: Array<"Option1">;
  name?: string | null;
  phone?: string | null;
};

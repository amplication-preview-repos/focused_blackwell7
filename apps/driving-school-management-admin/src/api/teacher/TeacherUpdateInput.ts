import { CalendarEventUpdateManyWithoutTeachersInput } from "./CalendarEventUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  calendarEvents?: CalendarEventUpdateManyWithoutTeachersInput;
  email?: string | null;
  expertise?: Array<"Option1">;
  name?: string | null;
  phone?: string | null;
};

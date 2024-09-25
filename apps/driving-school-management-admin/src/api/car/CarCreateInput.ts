import { CalendarEventCreateNestedManyWithoutCarsInput } from "./CalendarEventCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  availability?: boolean | null;
  calendarEvents?: CalendarEventCreateNestedManyWithoutCarsInput;
  licensePlate?: string | null;
  model?: string | null;
};

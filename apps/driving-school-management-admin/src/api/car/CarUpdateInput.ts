import { CalendarEventUpdateManyWithoutCarsInput } from "./CalendarEventUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  availability?: boolean | null;
  calendarEvents?: CalendarEventUpdateManyWithoutCarsInput;
  licensePlate?: string | null;
  model?: string | null;
};

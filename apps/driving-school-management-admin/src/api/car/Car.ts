import { CalendarEvent } from "../calendarEvent/CalendarEvent";

export type Car = {
  availability: boolean | null;
  calendarEvents?: Array<CalendarEvent>;
  createdAt: Date;
  id: string;
  licensePlate: string | null;
  model: string | null;
  updatedAt: Date;
};

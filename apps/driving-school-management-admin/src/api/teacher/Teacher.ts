import { CalendarEvent } from "../calendarEvent/CalendarEvent";

export type Teacher = {
  calendarEvents?: Array<CalendarEvent>;
  createdAt: Date;
  email: string | null;
  expertise?: Array<"Option1">;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};

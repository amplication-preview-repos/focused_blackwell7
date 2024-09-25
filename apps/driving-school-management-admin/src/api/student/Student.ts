import { CalendarEvent } from "../calendarEvent/CalendarEvent";
import { Payment } from "../payment/Payment";

export type Student = {
  address: string | null;
  calendarEvents?: Array<CalendarEvent>;
  createdAt: Date;
  email: string | null;
  id: string;
  licenseType: string | null;
  name: string | null;
  payments?: Array<Payment>;
  phone: string | null;
  updatedAt: Date;
};

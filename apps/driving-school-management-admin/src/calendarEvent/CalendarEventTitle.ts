import { CalendarEvent as TCalendarEvent } from "../api/calendarEvent/CalendarEvent";

export const CALENDAREVENT_TITLE_FIELD = "lessonType";

export const CalendarEventTitle = (record: TCalendarEvent): string => {
  return record.lessonType?.toString() || String(record.id);
};

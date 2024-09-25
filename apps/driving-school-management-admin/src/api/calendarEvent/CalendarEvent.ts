import { Car } from "../car/Car";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type CalendarEvent = {
  car?: Car | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  lessonType: string | null;
  student?: Student | null;
  teacher?: Teacher | null;
  time: Date | null;
  updatedAt: Date;
};

import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CalendarEventUpdateInput = {
  car?: CarWhereUniqueInput | null;
  date?: Date | null;
  lessonType?: string | null;
  student?: StudentWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
  time?: Date | null;
};

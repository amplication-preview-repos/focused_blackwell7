import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CalendarEventWhereInput = {
  car?: CarWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  lessonType?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
  time?: DateTimeNullableFilter;
};

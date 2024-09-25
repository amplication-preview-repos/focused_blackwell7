import { SortOrder } from "../../util/SortOrder";

export type CalendarEventOrderByInput = {
  carId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  lessonType?: SortOrder;
  studentId?: SortOrder;
  teacherId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};

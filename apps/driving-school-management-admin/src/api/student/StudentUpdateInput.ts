import { CalendarEventUpdateManyWithoutStudentsInput } from "./CalendarEventUpdateManyWithoutStudentsInput";
import { PaymentUpdateManyWithoutStudentsInput } from "./PaymentUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  address?: string | null;
  calendarEvents?: CalendarEventUpdateManyWithoutStudentsInput;
  email?: string | null;
  licenseType?: string | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutStudentsInput;
  phone?: string | null;
};

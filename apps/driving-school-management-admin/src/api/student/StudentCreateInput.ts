import { CalendarEventCreateNestedManyWithoutStudentsInput } from "./CalendarEventCreateNestedManyWithoutStudentsInput";
import { PaymentCreateNestedManyWithoutStudentsInput } from "./PaymentCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  address?: string | null;
  calendarEvents?: CalendarEventCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  licenseType?: string | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutStudentsInput;
  phone?: string | null;
};

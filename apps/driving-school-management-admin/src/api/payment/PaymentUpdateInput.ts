import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  paymentMethod?: string | null;
  student?: StudentWhereUniqueInput | null;
};

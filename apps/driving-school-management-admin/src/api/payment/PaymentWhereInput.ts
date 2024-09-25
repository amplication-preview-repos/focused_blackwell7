import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};

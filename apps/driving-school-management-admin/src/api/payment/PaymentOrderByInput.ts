import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};

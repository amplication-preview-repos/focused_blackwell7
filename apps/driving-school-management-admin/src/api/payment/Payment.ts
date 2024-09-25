import { Student } from "../student/Student";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  paymentMethod: string | null;
  student?: Student | null;
  updatedAt: Date;
};

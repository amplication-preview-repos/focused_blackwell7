import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};

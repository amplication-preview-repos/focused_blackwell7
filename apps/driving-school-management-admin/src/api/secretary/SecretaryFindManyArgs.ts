import { SecretaryWhereInput } from "./SecretaryWhereInput";
import { SecretaryOrderByInput } from "./SecretaryOrderByInput";

export type SecretaryFindManyArgs = {
  where?: SecretaryWhereInput;
  orderBy?: Array<SecretaryOrderByInput>;
  skip?: number;
  take?: number;
};

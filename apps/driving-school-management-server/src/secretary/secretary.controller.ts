import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecretaryService } from "./secretary.service";
import { SecretaryControllerBase } from "./base/secretary.controller.base";

@swagger.ApiTags("secretaries")
@common.Controller("secretaries")
export class SecretaryController extends SecretaryControllerBase {
  constructor(protected readonly service: SecretaryService) {
    super(service);
  }
}

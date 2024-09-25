import * as graphql from "@nestjs/graphql";
import { SecretaryResolverBase } from "./base/secretary.resolver.base";
import { Secretary } from "./base/Secretary";
import { SecretaryService } from "./secretary.service";

@graphql.Resolver(() => Secretary)
export class SecretaryResolver extends SecretaryResolverBase {
  constructor(protected readonly service: SecretaryService) {
    super(service);
  }
}

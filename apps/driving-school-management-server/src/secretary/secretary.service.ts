import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecretaryServiceBase } from "./base/secretary.service.base";

@Injectable()
export class SecretaryService extends SecretaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

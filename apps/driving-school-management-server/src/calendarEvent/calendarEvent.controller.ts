import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarEventService } from "./calendarEvent.service";
import { CalendarEventControllerBase } from "./base/calendarEvent.controller.base";

@swagger.ApiTags("calendarEvents")
@common.Controller("calendarEvents")
export class CalendarEventController extends CalendarEventControllerBase {
  constructor(protected readonly service: CalendarEventService) {
    super(service);
  }
}

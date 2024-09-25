import * as graphql from "@nestjs/graphql";
import { CalendarEventResolverBase } from "./base/calendarEvent.resolver.base";
import { CalendarEvent } from "./base/CalendarEvent";
import { CalendarEventService } from "./calendarEvent.service";

@graphql.Resolver(() => CalendarEvent)
export class CalendarEventResolver extends CalendarEventResolverBase {
  constructor(protected readonly service: CalendarEventService) {
    super(service);
  }
}

import { Module } from "@nestjs/common";
import { CalendarEventModuleBase } from "./base/calendarEvent.module.base";
import { CalendarEventService } from "./calendarEvent.service";
import { CalendarEventController } from "./calendarEvent.controller";
import { CalendarEventResolver } from "./calendarEvent.resolver";

@Module({
  imports: [CalendarEventModuleBase],
  controllers: [CalendarEventController],
  providers: [CalendarEventService, CalendarEventResolver],
  exports: [CalendarEventService],
})
export class CalendarEventModule {}

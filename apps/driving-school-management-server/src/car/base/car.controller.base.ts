/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CarService } from "../car.service";
import { CarCreateInput } from "./CarCreateInput";
import { Car } from "./Car";
import { CarFindManyArgs } from "./CarFindManyArgs";
import { CarWhereUniqueInput } from "./CarWhereUniqueInput";
import { CarUpdateInput } from "./CarUpdateInput";
import { CalendarEventFindManyArgs } from "../../calendarEvent/base/CalendarEventFindManyArgs";
import { CalendarEvent } from "../../calendarEvent/base/CalendarEvent";
import { CalendarEventWhereUniqueInput } from "../../calendarEvent/base/CalendarEventWhereUniqueInput";

export class CarControllerBase {
  constructor(protected readonly service: CarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Car })
  async createCar(@common.Body() data: CarCreateInput): Promise<Car> {
    return await this.service.createCar({
      data: data,
      select: {
        availability: true,
        createdAt: true,
        id: true,
        licensePlate: true,
        model: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Car] })
  @ApiNestedQuery(CarFindManyArgs)
  async cars(@common.Req() request: Request): Promise<Car[]> {
    const args = plainToClass(CarFindManyArgs, request.query);
    return this.service.cars({
      ...args,
      select: {
        availability: true,
        createdAt: true,
        id: true,
        licensePlate: true,
        model: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async car(@common.Param() params: CarWhereUniqueInput): Promise<Car | null> {
    const result = await this.service.car({
      where: params,
      select: {
        availability: true,
        createdAt: true,
        id: true,
        licensePlate: true,
        model: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCar(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() data: CarUpdateInput
  ): Promise<Car | null> {
    try {
      return await this.service.updateCar({
        where: params,
        data: data,
        select: {
          availability: true,
          createdAt: true,
          id: true,
          licensePlate: true,
          model: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCar(
    @common.Param() params: CarWhereUniqueInput
  ): Promise<Car | null> {
    try {
      return await this.service.deleteCar({
        where: params,
        select: {
          availability: true,
          createdAt: true,
          id: true,
          licensePlate: true,
          model: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/calendarEvents")
  @ApiNestedQuery(CalendarEventFindManyArgs)
  async findCalendarEvents(
    @common.Req() request: Request,
    @common.Param() params: CarWhereUniqueInput
  ): Promise<CalendarEvent[]> {
    const query = plainToClass(CalendarEventFindManyArgs, request.query);
    const results = await this.service.findCalendarEvents(params.id, {
      ...query,
      select: {
        car: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        lessonType: true,

        student: {
          select: {
            id: true,
          },
        },

        teacher: {
          select: {
            id: true,
          },
        },

        time: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/calendarEvents")
  async connectCalendarEvents(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: CalendarEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      calendarEvents: {
        connect: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/calendarEvents")
  async updateCalendarEvents(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: CalendarEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      calendarEvents: {
        set: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/calendarEvents")
  async disconnectCalendarEvents(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: CalendarEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      calendarEvents: {
        disconnect: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }
}

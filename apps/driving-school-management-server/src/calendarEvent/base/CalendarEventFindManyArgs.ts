/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CalendarEventWhereInput } from "./CalendarEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CalendarEventOrderByInput } from "./CalendarEventOrderByInput";

@ArgsType()
class CalendarEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CalendarEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CalendarEventWhereInput, { nullable: true })
  @Type(() => CalendarEventWhereInput)
  where?: CalendarEventWhereInput;

  @ApiProperty({
    required: false,
    type: [CalendarEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CalendarEventOrderByInput], { nullable: true })
  @Type(() => CalendarEventOrderByInput)
  orderBy?: Array<CalendarEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CalendarEventFindManyArgs as CalendarEventFindManyArgs };
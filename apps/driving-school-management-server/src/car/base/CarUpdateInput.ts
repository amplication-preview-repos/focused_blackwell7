/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { CalendarEventUpdateManyWithoutCarsInput } from "./CalendarEventUpdateManyWithoutCarsInput";
import { Type } from "class-transformer";

@InputType()
class CarUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  availability?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => CalendarEventUpdateManyWithoutCarsInput,
  })
  @ValidateNested()
  @Type(() => CalendarEventUpdateManyWithoutCarsInput)
  @IsOptional()
  @Field(() => CalendarEventUpdateManyWithoutCarsInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventUpdateManyWithoutCarsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licensePlate?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;
}

export { CarUpdateInput as CarUpdateInput };

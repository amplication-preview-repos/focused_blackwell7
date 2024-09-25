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
import { CarWhereUniqueInput } from "../../car/base/CarWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../../teacher/base/TeacherWhereUniqueInput";

@InputType()
class CalendarEventUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarWhereUniqueInput)
  @IsOptional()
  @Field(() => CarWhereUniqueInput, {
    nullable: true,
  })
  car?: CarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

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
  lessonType?: string | null;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TeacherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeacherWhereUniqueInput)
  @IsOptional()
  @Field(() => TeacherWhereUniqueInput, {
    nullable: true,
  })
  teacher?: TeacherWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date | null;
}

export { CalendarEventUpdateInput as CalendarEventUpdateInput };

import { InputType, Field } from '@nestjs/graphql';

@InputType('StringFilter')
export class StringFilter {
  @Field({ nullable: true })
  equals?: string;

  @Field({ nullable: true })
  contains?: string;

  @Field({ nullable: true })
  startsWith?: string;

  @Field({ nullable: true })
  endsWith?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];

  @Field(() => [String], { nullable: true })
  notIn?: string[];

  @Field({ nullable: true })
  not?: string;
}

@InputType('BooleanFilter')
export class BooleanFilter {
  @Field({ nullable: true })
  equals?: boolean;

  @Field({ nullable: true })
  not?: boolean;
}

@InputType('DateTimeFilter')
export class DateTimeFilter {
  @Field({ nullable: true })
  equals?: Date;

  @Field({ nullable: true })
  gt?: Date;

  @Field({ nullable: true })
  gte?: Date;

  @Field({ nullable: true })
  lt?: Date;

  @Field({ nullable: true })
  lte?: Date;

  @Field({ nullable: true })
  not?: Date;
}

@InputType('CustomWhereUserInput')
export class CustomWhereUserInput {
  @Field(() => [CustomWhereUserInput], { nullable: true })
  AND?: CustomWhereUserInput[];

  @Field(() => [CustomWhereUserInput], { nullable: true })
  OR?: CustomWhereUserInput[];

  @Field(() => [CustomWhereUserInput], { nullable: true })
  NOT?: CustomWhereUserInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  username?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  tenantId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  departmentId?: StringFilter;

  @Field(() => BooleanFilter, { nullable: true })
  isActive?: BooleanFilter;

  @Field(() => BooleanFilter, { nullable: true })
  isApprove?: BooleanFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}

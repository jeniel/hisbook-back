import { UserWhereInput } from '@/generated/user/user-where.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ArgsType()
export class UserArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  employeeID?: string;

  @Field(() => UserWhereInput, { nullable: true })
  where?: Prisma.UserWhereInput;
}

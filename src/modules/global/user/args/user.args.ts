import { UserWhereInput } from '@/generated/user/user-where.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ArgsType()
export class UserArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => UserWhereInput, { nullable: true })
  where?: Prisma.UserWhereInput;
}

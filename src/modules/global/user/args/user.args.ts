import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ProfileWhereInput } from '@/generated/@generated/profile/profile-where.input';

@ArgsType()
export class UserProfileArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;
}

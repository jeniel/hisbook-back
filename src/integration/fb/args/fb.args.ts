import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { FacebookPageWhereInput } from 'src/@generated/facebook-page/facebook-page-where.input';

@ArgsType()
export class FacebookPageArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => FacebookPageWhereInput, { nullable: true })
  @Type(() => FacebookPageWhereInput)
  where?: FacebookPageWhereInput;
}

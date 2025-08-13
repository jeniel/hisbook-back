import { User } from '@/generated/user/user.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserList {
  @Field(() => [User])
  data: User;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}

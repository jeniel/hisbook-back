import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Profile } from '@/generated/@generated/profile/profile.model';
import { Meta } from '@/shared/common/entities/pagination-meta';

@ObjectType()
export class UserList {
  @Field(() => [Profile])
  data: Profile;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}

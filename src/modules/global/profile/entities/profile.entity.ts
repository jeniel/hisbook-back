import { Profile } from '@/generated/profile/profile.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileList {
  @Field(() => [Profile])
  data: Profile[];

  @Field(() => Meta, { nullable: true })
  meta?: Meta;
}

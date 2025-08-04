import { Field, ObjectType } from '@nestjs/graphql';
import { FacebookPage } from '@/generated/@generated/facebook-page/facebook-page.model';
import { Meta } from '@/shared/common/entities/pagination-meta';

@ObjectType()
export class FaceBookPageList {
  @Field(() => [FacebookPage])
  data: FacebookPage;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}

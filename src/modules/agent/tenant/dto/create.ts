import { Field, InputType, Int } from '@nestjs/graphql';
import { User } from '@/generated/@generated/user/user.model';

@InputType()
export class CreateTenant {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  chatTableName!: string;

  @Field(() => String, { nullable: true })
  documentTableName: string;

  @Field(() => String, { nullable: false })
  collectionName!: string;

  @Field(() => Int)
  size: number;

  @Field({ defaultValue: 'Cosine' })
  distance?: 'Cosine' | 'Euclid' | 'Dot';
}

import { Field, InputType } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';

@InputType()
export class CreateTenant {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, {nullable:true})
  chatTableName!: string | null;

  @Field(() => String, {nullable:true})
  documentTableName!: string | null;
}

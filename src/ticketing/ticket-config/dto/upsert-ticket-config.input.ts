import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class UpsertCategInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string | null;
}

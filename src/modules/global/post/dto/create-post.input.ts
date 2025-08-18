import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  content: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => String, { nullable: true })
  userId?: string;
}

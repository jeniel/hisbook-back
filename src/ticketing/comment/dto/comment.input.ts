import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: false })
  ticketId!: string;

  @Field(() => String, { nullable: false })
  profileId!: string;
}

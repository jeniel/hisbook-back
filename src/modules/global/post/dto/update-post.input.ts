import { CreatePostInput } from '@/modules/global/post/dto/create-post.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  datePosted?: Date;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => String, { nullable: true })
  userId?: string;
}

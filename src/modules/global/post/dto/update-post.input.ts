import { CreatePostInput } from '@/modules/global/post/dto/create-post.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => String)
  content: string;

  @Field(() => [String], { nullable: true })
  images?: string[];
}

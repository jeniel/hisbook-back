import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostPage {
  @Field(() => String, { description: 'The Facebook Page ID' })
  pageId: string;

  @Field(() => String, {
    description: 'The message to post on the Facebook Page',
  })
  message: string;
}

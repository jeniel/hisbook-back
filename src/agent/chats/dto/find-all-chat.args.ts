import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FindAllChatArgs {
  @Field(() => String)
  tenantId: string;

  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  limit: number;

  @Field(() => String, { nullable: true })
  sessionId: string;
}

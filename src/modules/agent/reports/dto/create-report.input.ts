import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateReportInput {
  @Field(() => [String], { description: 'Array of keywords for the report' })
  keyword: string[];

  @Field(() => String, { description: 'Intent of the message' })
  message_intent: string;

  @Field(() => String, { description: 'Session identifier' })
  session_id: string;

  @Field(() => String, { description: 'Tenant identifier' })
  tenantId: string;
}

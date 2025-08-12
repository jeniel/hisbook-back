import { ObjectType, Field } from '@nestjs/graphql';
import { MissedLogoutTicket } from './create-ticket.object';

@ObjectType()
export class GeneralMsg {
  @Field()
  message: string;

  @Field(() => MissedLogoutTicket, { nullable: true })
  data?: MissedLogoutTicket;
}

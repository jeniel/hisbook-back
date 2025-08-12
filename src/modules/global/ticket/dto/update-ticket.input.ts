import { Status } from '@/generated/prisma/status.enum';
import { CreateMissedLogoutTicketInput } from './create-ticket.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMissedLogoutTicketInput extends PartialType(
  CreateMissedLogoutTicketInput,
) {
  @Field()
  missedAt?: Date;

  @Field({ nullable: true })
  floor?: string;

  @Field({ nullable: true })
  screenshot?: string;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field({ nullable: true })
  updatedBy?: string;

  @Field({ nullable: true })
  createdById?: string;
}

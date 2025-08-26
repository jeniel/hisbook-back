import { Status } from '@/generated/prisma/status.enum';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateTicketInput } from './create-ticket.input';

@InputType()
export class UpdateTicketInput extends PartialType(CreateTicketInput) {
  @Field({ nullable: true })
  subject?: string;

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

  @Field({ nullable: true })
  remarks?: string;
}

import { Status } from '@/generated/prisma/status.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field()
  subject: string;

  @Field({ nullable: true })
  missedAt?: Date;

  @Field({ nullable: true })
  floor?: string;

  @Field({ nullable: true })
  screenshot?: string;

  @Field({ nullable: true })
  message?: string;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field({ nullable: true })
  updatedBy?: string;

  @Field({ nullable: true })
  remarks?: string;

  @Field()
  createdById: string;

  @Field()
  departmentId: string;
}

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Status } from '@/generated/prisma/status.enum';

@ObjectType()
export class MissedLogoutTicket {
  @Field(() => ID)
  id: string;

  @Field()
  missedAt: string;

  @Field()
  floor: string;

  @Field({ nullable: true })
  screenshot?: string;

  @Field(() => Status)
  status: Status;

  @Field({ nullable: true })
  updatedBy?: string;

  @Field({ nullable: true })
  createdById?: string;
}

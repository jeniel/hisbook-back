import { Status } from '@/generated/prisma/status.enum';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TicketStatusCount {
  @Field(() => Status)
  status: Status;

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class DepartmentUserCount {
  @Field()
  departmentId: string;

  @Field()
  departmentName: string;

  @Field()
  departmentDescription: string;

  @Field(() => Int)
  userCount: number;
}

@ObjectType()
export class CensusSummary {
  @Field(() => Int)
  totalUsers: number;

  @Field(() => Int)
  totalTickets: number;

  @Field(() => Int)
  totalPosts: number;

  @Field(() => [TicketStatusCount])
  ticketsByStatus: TicketStatusCount[];

  @Field(() => Int)
  totalDepartments: number;

  @Field(() => [DepartmentUserCount])
  departmentsWithUserCount: DepartmentUserCount[];

  @Field(() => [TicketStatusCount], { nullable: true })
  ticketByUserId?: TicketStatusCount[];

  @Field(() => Int, { nullable: true })
  totalTicketsByUserId?: number;
}

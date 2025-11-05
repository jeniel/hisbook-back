import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { User } from '../user/user.model';
import { Department } from '../department/department.model';
import { AuditLog } from '../audit-log/audit-log.model';
import { TicketCount } from './ticket-count.output';

@ObjectType()
export class Ticket {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:true})
    missedAt!: Date | null;

    @Field(() => String, {nullable:true})
    floor!: string | null;

    @Field(() => String, {nullable:true})
    screenshot!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => String, {nullable:true})
    serialNumber!: string | null;

    @Field(() => Status, {defaultValue:'Pending',nullable:false})
    status!: `${Status}`;

    @Field(() => String, {nullable:true})
    remarks!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => Department, {nullable:false})
    department?: Department;

    @Field(() => [AuditLog], {nullable:true})
    auditLogs?: Array<AuditLog>;

    @Field(() => TicketCount, {nullable:false})
    _count?: TicketCount;
}

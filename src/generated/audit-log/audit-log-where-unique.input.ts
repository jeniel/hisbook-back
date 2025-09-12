import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogWhereInput } from './audit-log-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { TicketNullableScalarRelationFilter } from '../ticket/ticket-nullable-scalar-relation-filter.input';

@InputType()
export class AuditLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AuditLogWhereInput], {nullable:true})
    AND?: Array<AuditLogWhereInput>;

    @Field(() => [AuditLogWhereInput], {nullable:true})
    OR?: Array<AuditLogWhereInput>;

    @Field(() => [AuditLogWhereInput], {nullable:true})
    NOT?: Array<AuditLogWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    remarks?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketId?: StringNullableFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;

    @Field(() => TicketNullableScalarRelationFilter, {nullable:true})
    ticket?: TicketNullableScalarRelationFilter;
}

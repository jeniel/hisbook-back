import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { TicketNullableScalarRelationFilter } from '../ticket/ticket-nullable-scalar-relation-filter.input';

@InputType()
export class AuditLogWhereInput {

    @Field(() => [AuditLogWhereInput], {nullable:true})
    AND?: Array<AuditLogWhereInput>;

    @Field(() => [AuditLogWhereInput], {nullable:true})
    OR?: Array<AuditLogWhereInput>;

    @Field(() => [AuditLogWhereInput], {nullable:true})
    NOT?: Array<AuditLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

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

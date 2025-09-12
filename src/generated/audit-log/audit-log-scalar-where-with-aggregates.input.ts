import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AuditLogScalarWhereWithAggregatesInput {

    @Field(() => [AuditLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuditLogScalarWhereWithAggregatesInput>;

    @Field(() => [AuditLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuditLogScalarWhereWithAggregatesInput>;

    @Field(() => [AuditLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuditLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    action?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    remarks?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    timestamp?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedBy?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ticketId?: StringNullableWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumStatusNullableWithAggregatesFilter } from '../prisma/enum-status-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MissedLogoutTicketScalarWhereWithAggregatesInput {

    @Field(() => [MissedLogoutTicketScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MissedLogoutTicketScalarWhereWithAggregatesInput>;

    @Field(() => [MissedLogoutTicketScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MissedLogoutTicketScalarWhereWithAggregatesInput>;

    @Field(() => [MissedLogoutTicketScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MissedLogoutTicketScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subject?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    missedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    floor?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    screenshot?: StringNullableWithAggregatesFilter;

    @Field(() => EnumStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    remarks?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedBy?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    createdById?: StringNullableWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TicketScalarWhereInput {

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    AND?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    OR?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    NOT?: Array<TicketScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    seq?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    missedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    floor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    screenshot?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serialNumber?: StringNullableFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    remarks?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    departmentId?: StringFilter;
}

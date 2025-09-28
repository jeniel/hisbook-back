import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    detailsUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}

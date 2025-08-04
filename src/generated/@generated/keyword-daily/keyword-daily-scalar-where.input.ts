import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class keyword_dailyScalarWhereInput {

    @Field(() => [keyword_dailyScalarWhereInput], {nullable:true})
    AND?: Array<keyword_dailyScalarWhereInput>;

    @Field(() => [keyword_dailyScalarWhereInput], {nullable:true})
    OR?: Array<keyword_dailyScalarWhereInput>;

    @Field(() => [keyword_dailyScalarWhereInput], {nullable:true})
    NOT?: Array<keyword_dailyScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    keyword?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;
}

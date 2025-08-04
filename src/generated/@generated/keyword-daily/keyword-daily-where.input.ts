import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TenantNullableScalarRelationFilter } from '../tenant/tenant-nullable-scalar-relation-filter.input';

@InputType()
export class keyword_dailyWhereInput {

    @Field(() => [keyword_dailyWhereInput], {nullable:true})
    AND?: Array<keyword_dailyWhereInput>;

    @Field(() => [keyword_dailyWhereInput], {nullable:true})
    OR?: Array<keyword_dailyWhereInput>;

    @Field(() => [keyword_dailyWhereInput], {nullable:true})
    NOT?: Array<keyword_dailyWhereInput>;

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

    @Field(() => TenantNullableScalarRelationFilter, {nullable:true})
    tenant?: TenantNullableScalarRelationFilter;
}

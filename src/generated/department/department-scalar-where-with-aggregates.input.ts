import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class DepartmentScalarWhereWithAggregatesInput {

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isSupport?: BoolWithAggregatesFilter;
}

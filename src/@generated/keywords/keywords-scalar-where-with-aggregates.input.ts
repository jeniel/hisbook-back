import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class keywordsScalarWhereWithAggregatesInput {

    @Field(() => [keywordsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<keywordsScalarWhereWithAggregatesInput>;

    @Field(() => [keywordsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<keywordsScalarWhereWithAggregatesInput>;

    @Field(() => [keywordsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<keywordsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    keyword?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    count?: IntNullableWithAggregatesFilter;
}

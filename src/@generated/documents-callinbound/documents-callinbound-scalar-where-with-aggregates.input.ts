import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class documents_callinboundScalarWhereWithAggregatesInput {

    @Field(() => [documents_callinboundScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<documents_callinboundScalarWhereWithAggregatesInput>;

    @Field(() => [documents_callinboundScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<documents_callinboundScalarWhereWithAggregatesInput>;

    @Field(() => [documents_callinboundScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<documents_callinboundScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;
}

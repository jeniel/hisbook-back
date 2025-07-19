import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class KeywordScalarWhereWithAggregatesInput {

    @Field(() => [KeywordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<KeywordScalarWhereWithAggregatesInput>;

    @Field(() => [KeywordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<KeywordScalarWhereWithAggregatesInput>;

    @Field(() => [KeywordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<KeywordScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    keyword?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    count?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tenantId?: StringWithAggregatesFilter;
}

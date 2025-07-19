import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordWhereInput } from './keyword-where.input';
import { Type } from 'class-transformer';
import { KeywordOrderByWithRelationInput } from './keyword-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KeywordCountAggregateInput } from './keyword-count-aggregate.input';
import { KeywordAvgAggregateInput } from './keyword-avg-aggregate.input';
import { KeywordSumAggregateInput } from './keyword-sum-aggregate.input';
import { KeywordMinAggregateInput } from './keyword-min-aggregate.input';
import { KeywordMaxAggregateInput } from './keyword-max-aggregate.input';

@ArgsType()
export class KeywordAggregateArgs {

    @Field(() => KeywordWhereInput, {nullable:true})
    @Type(() => KeywordWhereInput)
    where?: KeywordWhereInput;

    @Field(() => [KeywordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KeywordOrderByWithRelationInput>;

    @Field(() => KeywordWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => KeywordCountAggregateInput, {nullable:true})
    _count?: KeywordCountAggregateInput;

    @Field(() => KeywordAvgAggregateInput, {nullable:true})
    _avg?: KeywordAvgAggregateInput;

    @Field(() => KeywordSumAggregateInput, {nullable:true})
    _sum?: KeywordSumAggregateInput;

    @Field(() => KeywordMinAggregateInput, {nullable:true})
    _min?: KeywordMinAggregateInput;

    @Field(() => KeywordMaxAggregateInput, {nullable:true})
    _max?: KeywordMaxAggregateInput;
}

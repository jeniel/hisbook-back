import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';
import { Type } from 'class-transformer';
import { CaseOrderByWithRelationInput } from './case-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CaseCountAggregateInput } from './case-count-aggregate.input';
import { CaseAvgAggregateInput } from './case-avg-aggregate.input';
import { CaseSumAggregateInput } from './case-sum-aggregate.input';
import { CaseMinAggregateInput } from './case-min-aggregate.input';
import { CaseMaxAggregateInput } from './case-max-aggregate.input';

@ArgsType()
export class CaseAggregateArgs {

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;

    @Field(() => [CaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CaseOrderByWithRelationInput>;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CaseCountAggregateInput, {nullable:true})
    _count?: CaseCountAggregateInput;

    @Field(() => CaseAvgAggregateInput, {nullable:true})
    _avg?: CaseAvgAggregateInput;

    @Field(() => CaseSumAggregateInput, {nullable:true})
    _sum?: CaseSumAggregateInput;

    @Field(() => CaseMinAggregateInput, {nullable:true})
    _min?: CaseMinAggregateInput;

    @Field(() => CaseMaxAggregateInput, {nullable:true})
    _max?: CaseMaxAggregateInput;
}

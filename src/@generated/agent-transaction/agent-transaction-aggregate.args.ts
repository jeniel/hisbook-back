import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionWhereInput } from './agent-transaction-where.input';
import { Type } from 'class-transformer';
import { AgentTransactionOrderByWithRelationInput } from './agent-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgentTransactionCountAggregateInput } from './agent-transaction-count-aggregate.input';
import { AgentTransactionMinAggregateInput } from './agent-transaction-min-aggregate.input';
import { AgentTransactionMaxAggregateInput } from './agent-transaction-max-aggregate.input';

@ArgsType()
export class AgentTransactionAggregateArgs {

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    @Type(() => AgentTransactionWhereInput)
    where?: AgentTransactionWhereInput;

    @Field(() => [AgentTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgentTransactionOrderByWithRelationInput>;

    @Field(() => AgentTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AgentTransactionCountAggregateInput, {nullable:true})
    _count?: AgentTransactionCountAggregateInput;

    @Field(() => AgentTransactionMinAggregateInput, {nullable:true})
    _min?: AgentTransactionMinAggregateInput;

    @Field(() => AgentTransactionMaxAggregateInput, {nullable:true})
    _max?: AgentTransactionMaxAggregateInput;
}

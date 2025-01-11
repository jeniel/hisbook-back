import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignWhereInput } from './vital-sign-where.input';
import { Type } from 'class-transformer';
import { VitalSignOrderByWithRelationInput } from './vital-sign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VitalSignCountAggregateInput } from './vital-sign-count-aggregate.input';
import { VitalSignAvgAggregateInput } from './vital-sign-avg-aggregate.input';
import { VitalSignSumAggregateInput } from './vital-sign-sum-aggregate.input';
import { VitalSignMinAggregateInput } from './vital-sign-min-aggregate.input';
import { VitalSignMaxAggregateInput } from './vital-sign-max-aggregate.input';

@ArgsType()
export class VitalSignAggregateArgs {

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    where?: VitalSignWhereInput;

    @Field(() => [VitalSignOrderByWithRelationInput], {nullable:true})
    @Type(() => VitalSignOrderByWithRelationInput)
    orderBy?: Array<VitalSignOrderByWithRelationInput>;

    @Field(() => VitalSignWhereUniqueInput, {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    cursor?: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VitalSignCountAggregateInput, {nullable:true})
    @Type(() => VitalSignCountAggregateInput)
    _count?: VitalSignCountAggregateInput;

    @Field(() => VitalSignAvgAggregateInput, {nullable:true})
    @Type(() => VitalSignAvgAggregateInput)
    _avg?: VitalSignAvgAggregateInput;

    @Field(() => VitalSignSumAggregateInput, {nullable:true})
    @Type(() => VitalSignSumAggregateInput)
    _sum?: VitalSignSumAggregateInput;

    @Field(() => VitalSignMinAggregateInput, {nullable:true})
    @Type(() => VitalSignMinAggregateInput)
    _min?: VitalSignMinAggregateInput;

    @Field(() => VitalSignMaxAggregateInput, {nullable:true})
    @Type(() => VitalSignMaxAggregateInput)
    _max?: VitalSignMaxAggregateInput;
}

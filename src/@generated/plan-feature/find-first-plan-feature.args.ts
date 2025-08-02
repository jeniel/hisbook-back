import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureWhereInput } from './plan-feature-where.input';
import { Type } from 'class-transformer';
import { PlanFeatureOrderByWithRelationInput } from './plan-feature-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanFeatureScalarFieldEnum } from './plan-feature-scalar-field.enum';

@ArgsType()
export class FindFirstPlanFeatureArgs {

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    @Type(() => PlanFeatureWhereInput)
    where?: PlanFeatureWhereInput;

    @Field(() => [PlanFeatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlanFeatureOrderByWithRelationInput>;

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlanFeatureScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlanFeatureScalarFieldEnum}`>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { PlanOrderByWithRelationInput } from './plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanScalarFieldEnum } from './plan-scalar-field.enum';

@ArgsType()
export class FindManyPlanArgs {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => [PlanOrderByWithRelationInput], {nullable:true})
    @Type(() => PlanOrderByWithRelationInput)
    orderBy?: Array<PlanOrderByWithRelationInput>;

    @Field(() => PlanWhereUniqueInput, {nullable:true})
    @Type(() => PlanWhereUniqueInput)
    cursor?: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlanScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlanScalarFieldEnum}`>;
}

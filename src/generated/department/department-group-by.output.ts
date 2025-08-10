import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DepartmentCountAggregate } from './department-count-aggregate.output';
import { DepartmentAvgAggregate } from './department-avg-aggregate.output';
import { DepartmentSumAggregate } from './department-sum-aggregate.output';
import { DepartmentMinAggregate } from './department-min-aggregate.output';
import { DepartmentMaxAggregate } from './department-max-aggregate.output';

@ObjectType()
export class DepartmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: DepartmentCountAggregate;

    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: DepartmentAvgAggregate;

    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: DepartmentSumAggregate;

    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: DepartmentMinAggregate;

    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: DepartmentMaxAggregate;
}

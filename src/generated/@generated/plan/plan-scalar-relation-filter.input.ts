import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PlanScalarRelationFilter {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    is?: PlanWhereInput;

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    isNot?: PlanWhereInput;
}

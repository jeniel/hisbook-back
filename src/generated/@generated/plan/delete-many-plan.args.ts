import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPlanArgs {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

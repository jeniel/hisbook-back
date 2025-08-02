import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { PlanUpdateWithoutFeaturesInput } from './plan-update-without-features.input';

@InputType()
export class PlanUpdateToOneWithWhereWithoutFeaturesInput {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => PlanUpdateWithoutFeaturesInput, {nullable:false})
    @Type(() => PlanUpdateWithoutFeaturesInput)
    data!: PlanUpdateWithoutFeaturesInput;
}

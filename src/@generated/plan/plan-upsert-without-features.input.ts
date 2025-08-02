import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanUpdateWithoutFeaturesInput } from './plan-update-without-features.input';
import { Type } from 'class-transformer';
import { PlanCreateWithoutFeaturesInput } from './plan-create-without-features.input';
import { PlanWhereInput } from './plan-where.input';

@InputType()
export class PlanUpsertWithoutFeaturesInput {

    @Field(() => PlanUpdateWithoutFeaturesInput, {nullable:false})
    @Type(() => PlanUpdateWithoutFeaturesInput)
    update!: PlanUpdateWithoutFeaturesInput;

    @Field(() => PlanCreateWithoutFeaturesInput, {nullable:false})
    @Type(() => PlanCreateWithoutFeaturesInput)
    create!: PlanCreateWithoutFeaturesInput;

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;
}

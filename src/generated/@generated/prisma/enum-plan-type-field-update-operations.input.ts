import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanType } from './plan-type.enum';

@InputType()
export class EnumPlanTypeFieldUpdateOperationsInput {

    @Field(() => PlanType, {nullable:true})
    set?: `${PlanType}`;
}

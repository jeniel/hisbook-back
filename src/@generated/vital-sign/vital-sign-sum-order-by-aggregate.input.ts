import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VitalSignSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heartRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    systolicBP?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    diastolicBP?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    temperature?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    respiratoryRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    oxygenSaturation?: keyof typeof SortOrder;
}

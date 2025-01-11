import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VitalSignMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;
}

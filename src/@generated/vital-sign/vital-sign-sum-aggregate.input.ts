import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VitalSignSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    heartRate?: true;

    @Field(() => Boolean, {nullable:true})
    systolicBP?: true;

    @Field(() => Boolean, {nullable:true})
    diastolicBP?: true;

    @Field(() => Boolean, {nullable:true})
    temperature?: true;

    @Field(() => Boolean, {nullable:true})
    respiratoryRate?: true;

    @Field(() => Boolean, {nullable:true})
    oxygenSaturation?: true;
}

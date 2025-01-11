import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VitalSignCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    timestamp?: true;

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

    @Field(() => Boolean, {nullable:true})
    caseId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

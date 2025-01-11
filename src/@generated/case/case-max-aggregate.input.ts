import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    cid?: true;

    @Field(() => Boolean, {nullable:true})
    caseNo?: true;

    @Field(() => Boolean, {nullable:true})
    priceGroup?: true;

    @Field(() => Boolean, {nullable:true})
    ageOnReg?: true;

    @Field(() => Boolean, {nullable:true})
    caseStatus?: true;

    @Field(() => Boolean, {nullable:true})
    maritalStatus?: true;

    @Field(() => Boolean, {nullable:true})
    patientId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;
}

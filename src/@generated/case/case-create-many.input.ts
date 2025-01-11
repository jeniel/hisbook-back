import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CaseCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    cid?: string;

    @Field(() => String, {nullable:true})
    caseNo?: string;

    @Field(() => String, {nullable:true})
    priceGroup?: string;

    @Field(() => Int, {nullable:true})
    ageOnReg?: number;

    @Field(() => Boolean, {nullable:true})
    caseStatus?: boolean;

    @Field(() => String, {nullable:true})
    maritalStatus?: string;

    @Field(() => String, {nullable:true})
    patientId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}

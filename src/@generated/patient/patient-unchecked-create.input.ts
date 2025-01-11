import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gender } from '../prisma/gender.enum';
import { CaseUncheckedCreateNestedManyWithoutPatientInput } from '../case/case-unchecked-create-nested-many-without-patient.input';
import { Type } from 'class-transformer';

@InputType()
export class PatientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    pid?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    address?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contact?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    identification?: any;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => Boolean, {nullable:true})
    isDeceased?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => CaseUncheckedCreateNestedManyWithoutPatientInput, {nullable:true})
    @Type(() => CaseUncheckedCreateNestedManyWithoutPatientInput)
    case?: CaseUncheckedCreateNestedManyWithoutPatientInput;
}

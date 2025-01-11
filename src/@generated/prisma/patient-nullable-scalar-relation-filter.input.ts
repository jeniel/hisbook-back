import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PatientWhereInput } from '../patient/patient-where.input';

@InputType()
export class PatientNullableScalarRelationFilter {

    @Field(() => PatientWhereInput, {nullable:true})
    is?: PatientWhereInput;

    @Field(() => PatientWhereInput, {nullable:true})
    isNot?: PatientWhereInput;
}

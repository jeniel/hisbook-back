import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateManyPatientInput } from './case-create-many-patient.input';
import { Type } from 'class-transformer';

@InputType()
export class CaseCreateManyPatientInputEnvelope {

    @Field(() => [CaseCreateManyPatientInput], {nullable:false})
    @Type(() => CaseCreateManyPatientInput)
    data!: Array<CaseCreateManyPatientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

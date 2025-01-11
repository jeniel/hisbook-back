import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientWhereInput } from './patient-where.input';
import { Type } from 'class-transformer';
import { PatientOrderByWithRelationInput } from './patient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PatientScalarFieldEnum } from './patient-scalar-field.enum';

@ArgsType()
export class FindFirstPatientOrThrowArgs {

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;

    @Field(() => [PatientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithRelationInput>;

    @Field(() => PatientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PatientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PatientScalarFieldEnum>;
}

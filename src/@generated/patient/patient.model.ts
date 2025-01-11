import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gender } from '../prisma/gender.enum';
import { Case } from '../case/case.model';
import { PatientCount } from './patient-count.output';

@ObjectType()
export class Patient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    pid!: string | null;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    middleName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => Date, {nullable:true})
    birthDate!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    address!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contact!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    identification!: any | null;

    @Field(() => Gender, {nullable:true})
    gender!: keyof typeof Gender | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isDeceased!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => [Case], {nullable:true})
    case?: Array<Case>;

    @Field(() => PatientCount, {nullable:false})
    _count?: PatientCount;
}

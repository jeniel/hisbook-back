import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gender } from '../prisma/gender.enum';
import { PatientCountAggregate } from './patient-count-aggregate.output';
import { PatientMinAggregate } from './patient-min-aggregate.output';
import { PatientMaxAggregate } from './patient-max-aggregate.output';

@ObjectType()
export class PatientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => PatientCountAggregate, {nullable:true})
    _count?: PatientCountAggregate;

    @Field(() => PatientMinAggregate, {nullable:true})
    _min?: PatientMinAggregate;

    @Field(() => PatientMaxAggregate, {nullable:true})
    _max?: PatientMaxAggregate;
}

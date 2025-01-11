import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PatientCountAggregate } from './patient-count-aggregate.output';
import { PatientMinAggregate } from './patient-min-aggregate.output';
import { PatientMaxAggregate } from './patient-max-aggregate.output';

@ObjectType()
export class AggregatePatient {

    @Field(() => PatientCountAggregate, {nullable:true})
    _count?: PatientCountAggregate;

    @Field(() => PatientMinAggregate, {nullable:true})
    _min?: PatientMinAggregate;

    @Field(() => PatientMaxAggregate, {nullable:true})
    _max?: PatientMaxAggregate;
}

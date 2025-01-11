import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientWhereInput } from './patient-where.input';
import { Type } from 'class-transformer';
import { PatientOrderByWithAggregationInput } from './patient-order-by-with-aggregation.input';
import { PatientScalarFieldEnum } from './patient-scalar-field.enum';
import { PatientScalarWhereWithAggregatesInput } from './patient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PatientCountAggregateInput } from './patient-count-aggregate.input';
import { PatientMinAggregateInput } from './patient-min-aggregate.input';
import { PatientMaxAggregateInput } from './patient-max-aggregate.input';

@ArgsType()
export class PatientGroupByArgs {

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;

    @Field(() => [PatientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PatientOrderByWithAggregationInput>;

    @Field(() => [PatientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PatientScalarFieldEnum>;

    @Field(() => PatientScalarWhereWithAggregatesInput, {nullable:true})
    having?: PatientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PatientCountAggregateInput, {nullable:true})
    _count?: PatientCountAggregateInput;

    @Field(() => PatientMinAggregateInput, {nullable:true})
    _min?: PatientMinAggregateInput;

    @Field(() => PatientMaxAggregateInput, {nullable:true})
    _max?: PatientMaxAggregateInput;
}

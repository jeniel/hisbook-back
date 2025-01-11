import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PatientOrderByWithRelationInput } from '../patient/patient-order-by-with-relation.input';
import { VitalSignOrderByRelationAggregateInput } from '../vital-sign/vital-sign-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class CaseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    cid?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    caseNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priceGroup?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ageOnReg?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    caseStatus?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    maritalStatus?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    patientId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => PatientOrderByWithRelationInput, {nullable:true})
    patient?: PatientOrderByWithRelationInput;

    @Field(() => VitalSignOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VitalSignOrderByRelationAggregateInput)
    vitalSign?: VitalSignOrderByRelationAggregateInput;
}

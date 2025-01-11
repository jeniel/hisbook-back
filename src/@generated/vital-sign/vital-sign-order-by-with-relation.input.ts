import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { CaseOrderByWithRelationInput } from '../case/case-order-by-with-relation.input';

@InputType()
export class VitalSignOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    heartRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    systolicBP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    diastolicBP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    temperature?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    respiratoryRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    oxygenSaturation?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    caseId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => CaseOrderByWithRelationInput, {nullable:true})
    @Type(() => CaseOrderByWithRelationInput)
    case?: CaseOrderByWithRelationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CaseCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caseNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceGroup?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ageOnReg?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caseStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maritalStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    patientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;
}

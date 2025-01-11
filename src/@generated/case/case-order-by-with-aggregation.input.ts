import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CaseCountOrderByAggregateInput } from './case-count-order-by-aggregate.input';
import { CaseAvgOrderByAggregateInput } from './case-avg-order-by-aggregate.input';
import { CaseMaxOrderByAggregateInput } from './case-max-order-by-aggregate.input';
import { CaseMinOrderByAggregateInput } from './case-min-order-by-aggregate.input';
import { CaseSumOrderByAggregateInput } from './case-sum-order-by-aggregate.input';

@InputType()
export class CaseOrderByWithAggregationInput {

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

    @Field(() => CaseCountOrderByAggregateInput, {nullable:true})
    _count?: CaseCountOrderByAggregateInput;

    @Field(() => CaseAvgOrderByAggregateInput, {nullable:true})
    _avg?: CaseAvgOrderByAggregateInput;

    @Field(() => CaseMaxOrderByAggregateInput, {nullable:true})
    _max?: CaseMaxOrderByAggregateInput;

    @Field(() => CaseMinOrderByAggregateInput, {nullable:true})
    _min?: CaseMinOrderByAggregateInput;

    @Field(() => CaseSumOrderByAggregateInput, {nullable:true})
    _sum?: CaseSumOrderByAggregateInput;
}

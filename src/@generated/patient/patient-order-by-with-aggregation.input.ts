import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PatientCountOrderByAggregateInput } from './patient-count-order-by-aggregate.input';
import { PatientMaxOrderByAggregateInput } from './patient-max-order-by-aggregate.input';
import { PatientMinOrderByAggregateInput } from './patient-min-order-by-aggregate.input';

@InputType()
export class PatientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    pid?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    middleName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    birthDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    identification?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isDeceased?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => PatientCountOrderByAggregateInput, {nullable:true})
    _count?: PatientCountOrderByAggregateInput;

    @Field(() => PatientMaxOrderByAggregateInput, {nullable:true})
    _max?: PatientMaxOrderByAggregateInput;

    @Field(() => PatientMinOrderByAggregateInput, {nullable:true})
    _min?: PatientMinOrderByAggregateInput;
}

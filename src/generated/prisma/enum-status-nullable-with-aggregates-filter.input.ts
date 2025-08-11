import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';
import { NestedEnumStatusNullableWithAggregatesFilter } from './nested-enum-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumStatusNullableFilter } from './nested-enum-status-nullable-filter.input';

@InputType()
export class EnumStatusNullableWithAggregatesFilter {

    @Field(() => Status, {nullable:true})
    equals?: `${Status}`;

    @Field(() => [Status], {nullable:true})
    in?: Array<`${Status}`>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<`${Status}`>;

    @Field(() => NestedEnumStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _min?: NestedEnumStatusNullableFilter;

    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    _max?: NestedEnumStatusNullableFilter;
}

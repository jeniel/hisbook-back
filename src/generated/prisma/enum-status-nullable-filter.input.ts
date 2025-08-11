import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';
import { NestedEnumStatusNullableFilter } from './nested-enum-status-nullable-filter.input';

@InputType()
export class EnumStatusNullableFilter {

    @Field(() => Status, {nullable:true})
    equals?: `${Status}`;

    @Field(() => [Status], {nullable:true})
    in?: Array<`${Status}`>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<`${Status}`>;

    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    not?: NestedEnumStatusNullableFilter;
}

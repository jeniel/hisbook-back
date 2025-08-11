import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';

@InputType()
export class NestedEnumStatusNullableFilter {

    @Field(() => Status, {nullable:true})
    equals?: `${Status}`;

    @Field(() => [Status], {nullable:true})
    in?: Array<`${Status}`>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<`${Status}`>;

    @Field(() => NestedEnumStatusNullableFilter, {nullable:true})
    not?: NestedEnumStatusNullableFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from './ticket-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTicketStatusNullableFilter } from './nested-enum-ticket-status-nullable-filter.input';

@InputType()
export class NestedEnumTicketStatusNullableWithAggregatesFilter {

    @Field(() => TicketStatus, {nullable:true})
    equals?: keyof typeof TicketStatus;

    @Field(() => [TicketStatus], {nullable:true})
    in?: Array<keyof typeof TicketStatus>;

    @Field(() => [TicketStatus], {nullable:true})
    notIn?: Array<keyof typeof TicketStatus>;

    @Field(() => NestedEnumTicketStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTicketStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTicketStatusNullableFilter, {nullable:true})
    _min?: NestedEnumTicketStatusNullableFilter;

    @Field(() => NestedEnumTicketStatusNullableFilter, {nullable:true})
    _max?: NestedEnumTicketStatusNullableFilter;
}

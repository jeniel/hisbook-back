import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketPriority } from './ticket-priority.enum';
import { NestedEnumTicketPriorityNullableWithAggregatesFilter } from './nested-enum-ticket-priority-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTicketPriorityNullableFilter } from './nested-enum-ticket-priority-nullable-filter.input';

@InputType()
export class EnumTicketPriorityNullableWithAggregatesFilter {

    @Field(() => TicketPriority, {nullable:true})
    equals?: keyof typeof TicketPriority;

    @Field(() => [TicketPriority], {nullable:true})
    in?: Array<keyof typeof TicketPriority>;

    @Field(() => [TicketPriority], {nullable:true})
    notIn?: Array<keyof typeof TicketPriority>;

    @Field(() => NestedEnumTicketPriorityNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTicketPriorityNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTicketPriorityNullableFilter, {nullable:true})
    _min?: NestedEnumTicketPriorityNullableFilter;

    @Field(() => NestedEnumTicketPriorityNullableFilter, {nullable:true})
    _max?: NestedEnumTicketPriorityNullableFilter;
}

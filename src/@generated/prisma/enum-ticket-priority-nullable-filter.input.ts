import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketPriority } from './ticket-priority.enum';
import { NestedEnumTicketPriorityNullableFilter } from './nested-enum-ticket-priority-nullable-filter.input';

@InputType()
export class EnumTicketPriorityNullableFilter {

    @Field(() => TicketPriority, {nullable:true})
    equals?: keyof typeof TicketPriority;

    @Field(() => [TicketPriority], {nullable:true})
    in?: Array<keyof typeof TicketPriority>;

    @Field(() => [TicketPriority], {nullable:true})
    notIn?: Array<keyof typeof TicketPriority>;

    @Field(() => NestedEnumTicketPriorityNullableFilter, {nullable:true})
    not?: NestedEnumTicketPriorityNullableFilter;
}

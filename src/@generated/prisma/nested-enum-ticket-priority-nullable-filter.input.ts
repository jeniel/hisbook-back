import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketPriority } from './ticket-priority.enum';

@InputType()
export class NestedEnumTicketPriorityNullableFilter {

    @Field(() => TicketPriority, {nullable:true})
    equals?: keyof typeof TicketPriority;

    @Field(() => [TicketPriority], {nullable:true})
    in?: Array<keyof typeof TicketPriority>;

    @Field(() => [TicketPriority], {nullable:true})
    notIn?: Array<keyof typeof TicketPriority>;

    @Field(() => NestedEnumTicketPriorityNullableFilter, {nullable:true})
    not?: NestedEnumTicketPriorityNullableFilter;
}

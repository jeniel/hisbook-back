import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from './ticket-status.enum';
import { NestedEnumTicketStatusNullableFilter } from './nested-enum-ticket-status-nullable-filter.input';

@InputType()
export class EnumTicketStatusNullableFilter {

    @Field(() => TicketStatus, {nullable:true})
    equals?: keyof typeof TicketStatus;

    @Field(() => [TicketStatus], {nullable:true})
    in?: Array<keyof typeof TicketStatus>;

    @Field(() => [TicketStatus], {nullable:true})
    notIn?: Array<keyof typeof TicketStatus>;

    @Field(() => NestedEnumTicketStatusNullableFilter, {nullable:true})
    not?: NestedEnumTicketStatusNullableFilter;
}

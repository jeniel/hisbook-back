import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from './ticket-status.enum';

@InputType()
export class NestedEnumTicketStatusNullableFilter {

    @Field(() => TicketStatus, {nullable:true})
    equals?: keyof typeof TicketStatus;

    @Field(() => [TicketStatus], {nullable:true})
    in?: Array<keyof typeof TicketStatus>;

    @Field(() => [TicketStatus], {nullable:true})
    notIn?: Array<keyof typeof TicketStatus>;

    @Field(() => NestedEnumTicketStatusNullableFilter, {nullable:true})
    not?: NestedEnumTicketStatusNullableFilter;
}

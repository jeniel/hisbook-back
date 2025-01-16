import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from './ticket-status.enum';

@InputType()
export class NullableEnumTicketStatusFieldUpdateOperationsInput {

    @Field(() => TicketStatus, {nullable:true})
    set?: keyof typeof TicketStatus;
}

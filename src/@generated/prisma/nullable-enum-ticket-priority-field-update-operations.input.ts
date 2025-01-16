import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketPriority } from './ticket-priority.enum';

@InputType()
export class NullableEnumTicketPriorityFieldUpdateOperationsInput {

    @Field(() => TicketPriority, {nullable:true})
    set?: keyof typeof TicketPriority;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';

@InputType()
export class TicketNullableScalarRelationFilter {

    @Field(() => TicketWhereInput, {nullable:true})
    is?: TicketWhereInput;

    @Field(() => TicketWhereInput, {nullable:true})
    isNot?: TicketWhereInput;
}

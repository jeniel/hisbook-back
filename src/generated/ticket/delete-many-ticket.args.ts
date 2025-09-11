import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTicketArgs {

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    where?: TicketWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

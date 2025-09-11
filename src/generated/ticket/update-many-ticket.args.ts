import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketUpdateManyMutationInput } from './ticket-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TicketWhereInput } from './ticket-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTicketArgs {

    @Field(() => TicketUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketUpdateManyMutationInput)
    data!: TicketUpdateManyMutationInput;

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    where?: TicketWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

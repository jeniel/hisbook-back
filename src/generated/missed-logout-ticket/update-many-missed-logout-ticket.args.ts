import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketUpdateManyMutationInput } from './missed-logout-ticket-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMissedLogoutTicketArgs {

    @Field(() => MissedLogoutTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateManyMutationInput)
    data!: MissedLogoutTicketUpdateManyMutationInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

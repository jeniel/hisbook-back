import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketScalarWhereInput } from './missed-logout-ticket-scalar-where.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketUpdateManyMutationInput } from './missed-logout-ticket-update-many-mutation.input';

@InputType()
export class MissedLogoutTicketUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => MissedLogoutTicketScalarWhereInput, {nullable:false})
    @Type(() => MissedLogoutTicketScalarWhereInput)
    where!: MissedLogoutTicketScalarWhereInput;

    @Field(() => MissedLogoutTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateManyMutationInput)
    data!: MissedLogoutTicketUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateManyCreatedByInput } from './missed-logout-ticket-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class MissedLogoutTicketCreateManyCreatedByInputEnvelope {

    @Field(() => [MissedLogoutTicketCreateManyCreatedByInput], {nullable:false})
    @Type(() => MissedLogoutTicketCreateManyCreatedByInput)
    data!: Array<MissedLogoutTicketCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

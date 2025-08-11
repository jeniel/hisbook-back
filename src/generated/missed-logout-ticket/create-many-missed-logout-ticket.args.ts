import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateManyInput } from './missed-logout-ticket-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMissedLogoutTicketArgs {

    @Field(() => [MissedLogoutTicketCreateManyInput], {nullable:false})
    @Type(() => MissedLogoutTicketCreateManyInput)
    data!: Array<MissedLogoutTicketCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

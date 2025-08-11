import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMissedLogoutTicketInput } from './user-update-without-missed-logout-ticket.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMissedLogoutTicketInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMissedLogoutTicketInput, {nullable:false})
    @Type(() => UserUpdateWithoutMissedLogoutTicketInput)
    data!: UserUpdateWithoutMissedLogoutTicketInput;
}

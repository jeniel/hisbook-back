import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMissedLogoutTicketInput } from './user-update-without-missed-logout-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMissedLogoutTicketInput } from './user-create-without-missed-logout-ticket.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMissedLogoutTicketInput {

    @Field(() => UserUpdateWithoutMissedLogoutTicketInput, {nullable:false})
    @Type(() => UserUpdateWithoutMissedLogoutTicketInput)
    update!: UserUpdateWithoutMissedLogoutTicketInput;

    @Field(() => UserCreateWithoutMissedLogoutTicketInput, {nullable:false})
    @Type(() => UserCreateWithoutMissedLogoutTicketInput)
    create!: UserCreateWithoutMissedLogoutTicketInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

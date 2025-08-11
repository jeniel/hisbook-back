import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMissedLogoutTicketInput } from './user-create-without-missed-logout-ticket.input';

@InputType()
export class UserCreateOrConnectWithoutMissedLogoutTicketInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutMissedLogoutTicketInput, {nullable:false})
    @Type(() => UserCreateWithoutMissedLogoutTicketInput)
    create!: UserCreateWithoutMissedLogoutTicketInput;
}

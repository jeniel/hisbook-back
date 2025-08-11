import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMissedLogoutTicketInput } from './user-create-without-missed-logout-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMissedLogoutTicketInput } from './user-create-or-connect-without-missed-logout-ticket.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMissedLogoutTicketInput {

    @Field(() => UserCreateWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserCreateWithoutMissedLogoutTicketInput)
    create?: UserCreateWithoutMissedLogoutTicketInput;

    @Field(() => UserCreateOrConnectWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMissedLogoutTicketInput)
    connectOrCreate?: UserCreateOrConnectWithoutMissedLogoutTicketInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

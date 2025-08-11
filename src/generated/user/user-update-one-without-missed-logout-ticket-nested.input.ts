import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMissedLogoutTicketInput } from './user-create-without-missed-logout-ticket.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMissedLogoutTicketInput } from './user-create-or-connect-without-missed-logout-ticket.input';
import { UserUpsertWithoutMissedLogoutTicketInput } from './user-upsert-without-missed-logout-ticket.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMissedLogoutTicketInput } from './user-update-to-one-with-where-without-missed-logout-ticket.input';

@InputType()
export class UserUpdateOneWithoutMissedLogoutTicketNestedInput {

    @Field(() => UserCreateWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserCreateWithoutMissedLogoutTicketInput)
    create?: UserCreateWithoutMissedLogoutTicketInput;

    @Field(() => UserCreateOrConnectWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMissedLogoutTicketInput)
    connectOrCreate?: UserCreateOrConnectWithoutMissedLogoutTicketInput;

    @Field(() => UserUpsertWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserUpsertWithoutMissedLogoutTicketInput)
    upsert?: UserUpsertWithoutMissedLogoutTicketInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMissedLogoutTicketInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMissedLogoutTicketInput)
    update?: UserUpdateToOneWithWhereWithoutMissedLogoutTicketInput;
}

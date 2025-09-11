import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTicketsInput } from './user-create-without-tickets.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTicketsInput } from './user-create-or-connect-without-tickets.input';
import { UserUpsertWithoutTicketsInput } from './user-upsert-without-tickets.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTicketsInput } from './user-update-to-one-with-where-without-tickets.input';

@InputType()
export class UserUpdateOneRequiredWithoutTicketsNestedInput {

    @Field(() => UserCreateWithoutTicketsInput, {nullable:true})
    @Type(() => UserCreateWithoutTicketsInput)
    create?: UserCreateWithoutTicketsInput;

    @Field(() => UserCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput;

    @Field(() => UserUpsertWithoutTicketsInput, {nullable:true})
    @Type(() => UserUpsertWithoutTicketsInput)
    upsert?: UserUpsertWithoutTicketsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTicketsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTicketsInput)
    update?: UserUpdateToOneWithWhereWithoutTicketsInput;
}

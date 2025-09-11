import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTicketsInput } from './user-create-without-tickets.input';

@InputType()
export class UserCreateOrConnectWithoutTicketsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutTicketsInput, {nullable:false})
    @Type(() => UserCreateWithoutTicketsInput)
    create!: UserCreateWithoutTicketsInput;
}

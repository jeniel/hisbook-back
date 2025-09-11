import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTicketsInput } from './user-update-without-tickets.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTicketsInput } from './user-create-without-tickets.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutTicketsInput {

    @Field(() => UserUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTicketsInput)
    update!: UserUpdateWithoutTicketsInput;

    @Field(() => UserCreateWithoutTicketsInput, {nullable:false})
    @Type(() => UserCreateWithoutTicketsInput)
    create!: UserCreateWithoutTicketsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

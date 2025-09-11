import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTicketsInput } from './user-update-without-tickets.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutTicketsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTicketsInput)
    data!: UserUpdateWithoutTicketsInput;
}

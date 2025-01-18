import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DepartmentCreateNestedOneWithoutProfileInput } from '../department/department-create-nested-one-without-profile.input';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { TicketTransactionCreateNestedManyWithoutProfileInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-profile.input';

@InputType()
export class ProfileCreateWithoutCommentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    designation?: string;

    @Field(() => Int, {nullable:true})
    employeeID?: number;

    @Field(() => Date, {nullable:true})
    dateHired?: Date | string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    address?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contact?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => DepartmentCreateNestedOneWithoutProfileInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutProfileInput;

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: UserCreateNestedOneWithoutProfileInput;

    @Field(() => TicketTransactionCreateNestedManyWithoutProfileInput, {nullable:true})
    tikcetTransaction?: TicketTransactionCreateNestedManyWithoutProfileInput;
}

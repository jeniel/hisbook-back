import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateWithoutDepartmentInput {

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

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: UserCreateNestedOneWithoutProfileInput;
}

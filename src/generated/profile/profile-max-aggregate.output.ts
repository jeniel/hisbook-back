import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    contact?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Int, {nullable:true})
    employeeID?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}

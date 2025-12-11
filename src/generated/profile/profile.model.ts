import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    middleName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => Date, {nullable:true})
    birthDate!: Date | null;

    @Field(() => Gender, {nullable:true})
    gender!: `${Gender}` | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    contact!: string | null;

    @Field(() => String, {nullable:true})
    secondaryContact!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:true})
    employeeID!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Department } from '../department/department.model';
import { User } from '../user/user.model';
import { TicketTransaction } from '../ticket-transaction/ticket-transaction.model';
import { Comment } from '../comment/comment.model';
import { ProfileCount } from './profile-count.output';

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

    @Field(() => String, {nullable:true})
    designation!: string | null;

    @Field(() => Int, {nullable:true})
    employeeID!: number | null;

    @Field(() => Date, {nullable:true})
    dateHired!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    address!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contact!: any | null;

    @Field(() => String, {nullable:true})
    departmentId!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [TicketTransaction], {nullable:true})
    tikcetTransaction?: Array<TicketTransaction>;

    @Field(() => [Comment], {nullable:true})
    comment?: Array<Comment>;

    @Field(() => ProfileCount, {nullable:false})
    _count?: ProfileCount;
}

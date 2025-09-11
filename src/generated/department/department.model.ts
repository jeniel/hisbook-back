import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Ticket } from '../ticket/ticket.model';
import { DepartmentCount } from './department-count.output';

@ObjectType()
export class Department {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Ticket], {nullable:true})
    tickets?: Array<Ticket>;

    @Field(() => DepartmentCount, {nullable:false})
    _count?: DepartmentCount;
}

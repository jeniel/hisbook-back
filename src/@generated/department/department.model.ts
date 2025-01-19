import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { TicketTransaction } from '../ticket-transaction/ticket-transaction.model';
import { DepartmentCount } from './department-count.output';

@ObjectType()
export class Department {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Profile], {nullable:true})
    profile?: Array<Profile>;

    @Field(() => [TicketTransaction], {nullable:true})
    ticketsFrom?: Array<TicketTransaction>;

    @Field(() => [TicketTransaction], {nullable:true})
    ticketsTo?: Array<TicketTransaction>;

    @Field(() => DepartmentCount, {nullable:false})
    _count?: DepartmentCount;
}

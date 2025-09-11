import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';

@InputType()
export class DepartmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    tickets?: TicketListRelationFilter;
}

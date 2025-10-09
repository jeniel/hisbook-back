import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';

@InputType()
export class DepartmentWhereInput {

    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isSupport?: BoolFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    tickets?: TicketListRelationFilter;
}

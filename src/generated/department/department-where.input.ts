import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

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

    @Field(() => UserListRelationFilter, {nullable:true})
    profiles?: UserListRelationFilter;
}

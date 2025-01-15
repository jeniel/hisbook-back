import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';

@InputType()
export class DepartmentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;

    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    profile?: ProfileListRelationFilter;
}

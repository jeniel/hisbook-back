import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middleName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthDate?: DateTimeNullableFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employeeID?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}

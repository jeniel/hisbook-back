import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FacebookPageScalarRelationFilter } from '../facebook-page/facebook-page-scalar-relation-filter.input';

@InputType()
export class FacebookPagePostWhereInput {

    @Field(() => [FacebookPagePostWhereInput], {nullable:true})
    AND?: Array<FacebookPagePostWhereInput>;

    @Field(() => [FacebookPagePostWhereInput], {nullable:true})
    OR?: Array<FacebookPagePostWhereInput>;

    @Field(() => [FacebookPagePostWhereInput], {nullable:true})
    NOT?: Array<FacebookPagePostWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdTime?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => FacebookPageScalarRelationFilter, {nullable:true})
    page?: FacebookPageScalarRelationFilter;
}

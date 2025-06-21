import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FacebookPagePostScalarWhereInput {

    @Field(() => [FacebookPagePostScalarWhereInput], {nullable:true})
    AND?: Array<FacebookPagePostScalarWhereInput>;

    @Field(() => [FacebookPagePostScalarWhereInput], {nullable:true})
    OR?: Array<FacebookPagePostScalarWhereInput>;

    @Field(() => [FacebookPagePostScalarWhereInput], {nullable:true})
    NOT?: Array<FacebookPagePostScalarWhereInput>;

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
}

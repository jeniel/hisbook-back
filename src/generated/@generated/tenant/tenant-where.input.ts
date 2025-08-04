import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDistanceMetricFilter } from '../prisma/enum-distance-metric-filter.input';
import { Keyword_dailyListRelationFilter } from '../prisma/keyword-daily-list-relation-filter.input';
import { KeywordsListRelationFilter } from '../prisma/keywords-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class TenantWhereInput {

    @Field(() => [TenantWhereInput], {nullable:true})
    AND?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    OR?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    NOT?: Array<TenantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApprove?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    nanoid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatTableName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentTableName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    collectionName?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    size?: IntNullableFilter;

    @Field(() => EnumDistanceMetricFilter, {nullable:true})
    distance?: EnumDistanceMetricFilter;

    @Field(() => Keyword_dailyListRelationFilter, {nullable:true})
    keywordDailies?: Keyword_dailyListRelationFilter;

    @Field(() => KeywordsListRelationFilter, {nullable:true})
    keywords?: KeywordsListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}

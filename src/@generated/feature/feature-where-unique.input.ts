import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FeatureWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [FeatureWhereInput], {nullable:true})
    AND?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    OR?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    NOT?: Array<FeatureWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

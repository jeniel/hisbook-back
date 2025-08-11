import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PostsScalarWhereWithAggregatesInput {

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;
}

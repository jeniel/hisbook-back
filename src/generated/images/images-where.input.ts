import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PostsScalarRelationFilter } from '../posts/posts-scalar-relation-filter.input';

@InputType()
export class ImagesWhereInput {

    @Field(() => [ImagesWhereInput], {nullable:true})
    AND?: Array<ImagesWhereInput>;

    @Field(() => [ImagesWhereInput], {nullable:true})
    OR?: Array<ImagesWhereInput>;

    @Field(() => [ImagesWhereInput], {nullable:true})
    NOT?: Array<ImagesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;

    @Field(() => PostsScalarRelationFilter, {nullable:true})
    post?: PostsScalarRelationFilter;
}

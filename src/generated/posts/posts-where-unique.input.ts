import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class PostsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PostsWhereInput], {nullable:true})
    AND?: Array<PostsWhereInput>;

    @Field(() => [PostsWhereInput], {nullable:true})
    OR?: Array<PostsWhereInput>;

    @Field(() => [PostsWhereInput], {nullable:true})
    NOT?: Array<PostsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => ImagesListRelationFilter, {nullable:true})
    images?: ImagesListRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}

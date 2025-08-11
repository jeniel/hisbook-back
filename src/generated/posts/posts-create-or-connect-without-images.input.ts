import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { PostsCreateWithoutImagesInput } from './posts-create-without-images.input';

@InputType()
export class PostsCreateOrConnectWithoutImagesInput {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    @Type(() => PostsWhereUniqueInput)
    where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

    @Field(() => PostsCreateWithoutImagesInput, {nullable:false})
    @Type(() => PostsCreateWithoutImagesInput)
    create!: PostsCreateWithoutImagesInput;
}

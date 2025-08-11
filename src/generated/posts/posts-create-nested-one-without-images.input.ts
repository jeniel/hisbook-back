import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutImagesInput } from './posts-create-without-images.input';
import { Type } from 'class-transformer';
import { PostsCreateOrConnectWithoutImagesInput } from './posts-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@InputType()
export class PostsCreateNestedOneWithoutImagesInput {

    @Field(() => PostsCreateWithoutImagesInput, {nullable:true})
    @Type(() => PostsCreateWithoutImagesInput)
    create?: PostsCreateWithoutImagesInput;

    @Field(() => PostsCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => PostsCreateOrConnectWithoutImagesInput)
    connectOrCreate?: PostsCreateOrConnectWithoutImagesInput;

    @Field(() => PostsWhereUniqueInput, {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    connect?: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;
}

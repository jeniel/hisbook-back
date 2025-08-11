import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutImagesInput } from './posts-create-without-images.input';
import { Type } from 'class-transformer';
import { PostsCreateOrConnectWithoutImagesInput } from './posts-create-or-connect-without-images.input';
import { PostsUpsertWithoutImagesInput } from './posts-upsert-without-images.input';
import { Prisma } from '@prisma/client';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateToOneWithWhereWithoutImagesInput } from './posts-update-to-one-with-where-without-images.input';

@InputType()
export class PostsUpdateOneRequiredWithoutImagesNestedInput {

    @Field(() => PostsCreateWithoutImagesInput, {nullable:true})
    @Type(() => PostsCreateWithoutImagesInput)
    create?: PostsCreateWithoutImagesInput;

    @Field(() => PostsCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => PostsCreateOrConnectWithoutImagesInput)
    connectOrCreate?: PostsCreateOrConnectWithoutImagesInput;

    @Field(() => PostsUpsertWithoutImagesInput, {nullable:true})
    @Type(() => PostsUpsertWithoutImagesInput)
    upsert?: PostsUpsertWithoutImagesInput;

    @Field(() => PostsWhereUniqueInput, {nullable:true})
    @Type(() => PostsWhereUniqueInput)
    connect?: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

    @Field(() => PostsUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => PostsUpdateToOneWithWhereWithoutImagesInput)
    update?: PostsUpdateToOneWithWhereWithoutImagesInput;
}

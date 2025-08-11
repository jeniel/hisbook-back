import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsUpdateWithoutImagesInput } from './posts-update-without-images.input';
import { Type } from 'class-transformer';
import { PostsCreateWithoutImagesInput } from './posts-create-without-images.input';
import { PostsWhereInput } from './posts-where.input';

@InputType()
export class PostsUpsertWithoutImagesInput {

    @Field(() => PostsUpdateWithoutImagesInput, {nullable:false})
    @Type(() => PostsUpdateWithoutImagesInput)
    update!: PostsUpdateWithoutImagesInput;

    @Field(() => PostsCreateWithoutImagesInput, {nullable:false})
    @Type(() => PostsCreateWithoutImagesInput)
    create!: PostsCreateWithoutImagesInput;

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    where?: PostsWhereInput;
}

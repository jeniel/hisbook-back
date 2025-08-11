import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { PostsUpdateWithoutImagesInput } from './posts-update-without-images.input';

@InputType()
export class PostsUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => PostsWhereInput, {nullable:true})
    @Type(() => PostsWhereInput)
    where?: PostsWhereInput;

    @Field(() => PostsUpdateWithoutImagesInput, {nullable:false})
    @Type(() => PostsUpdateWithoutImagesInput)
    data!: PostsUpdateWithoutImagesInput;
}

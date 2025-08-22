import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateimagesInput } from './posts-createimages.input';

@InputType()
export class PostsCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    datePosted?: Date | string;

    @Field(() => PostsCreateimagesInput, {nullable:true})
    images?: PostsCreateimagesInput;

    @Field(() => String, {nullable:true})
    userId?: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostsUncheckedCreateWithoutImagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    datePosted?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}

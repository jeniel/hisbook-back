import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPageCreateNestedOneWithoutFacebookPagePostInput } from '../facebook-page/facebook-page-create-nested-one-without-facebook-page-post.input';

@InputType()
export class FacebookPagePostCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    createdTime?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FacebookPageCreateNestedOneWithoutFacebookPagePostInput, {nullable:false})
    page!: FacebookPageCreateNestedOneWithoutFacebookPagePostInput;
}

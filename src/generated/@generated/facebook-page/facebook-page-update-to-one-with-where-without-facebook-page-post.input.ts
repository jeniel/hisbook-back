import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Type } from 'class-transformer';
import { FacebookPageUpdateWithoutFacebookPagePostInput } from './facebook-page-update-without-facebook-page-post.input';

@InputType()
export class FacebookPageUpdateToOneWithWhereWithoutFacebookPagePostInput {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => FacebookPageUpdateWithoutFacebookPagePostInput, {nullable:false})
    @Type(() => FacebookPageUpdateWithoutFacebookPagePostInput)
    data!: FacebookPageUpdateWithoutFacebookPagePostInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPageUpdateWithoutFacebookPagePostInput } from './facebook-page-update-without-facebook-page-post.input';
import { Type } from 'class-transformer';
import { FacebookPageCreateWithoutFacebookPagePostInput } from './facebook-page-create-without-facebook-page-post.input';
import { FacebookPageWhereInput } from './facebook-page-where.input';

@InputType()
export class FacebookPageUpsertWithoutFacebookPagePostInput {

    @Field(() => FacebookPageUpdateWithoutFacebookPagePostInput, {nullable:false})
    @Type(() => FacebookPageUpdateWithoutFacebookPagePostInput)
    update!: FacebookPageUpdateWithoutFacebookPagePostInput;

    @Field(() => FacebookPageCreateWithoutFacebookPagePostInput, {nullable:false})
    @Type(() => FacebookPageCreateWithoutFacebookPagePostInput)
    create!: FacebookPageCreateWithoutFacebookPagePostInput;

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;
}

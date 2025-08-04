import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookPageCreateWithoutFacebookPagePostInput } from './facebook-page-create-without-facebook-page-post.input';

@InputType()
export class FacebookPageCreateOrConnectWithoutFacebookPagePostInput {

    @Field(() => FacebookPageWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPageWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => FacebookPageCreateWithoutFacebookPagePostInput, {nullable:false})
    @Type(() => FacebookPageCreateWithoutFacebookPagePostInput)
    create!: FacebookPageCreateWithoutFacebookPagePostInput;
}

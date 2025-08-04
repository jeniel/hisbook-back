import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPageCreateWithoutFacebookPagePostInput } from './facebook-page-create-without-facebook-page-post.input';
import { Type } from 'class-transformer';
import { FacebookPageCreateOrConnectWithoutFacebookPagePostInput } from './facebook-page-create-or-connect-without-facebook-page-post.input';
import { FacebookPageUpsertWithoutFacebookPagePostInput } from './facebook-page-upsert-without-facebook-page-post.input';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { FacebookPageUpdateToOneWithWhereWithoutFacebookPagePostInput } from './facebook-page-update-to-one-with-where-without-facebook-page-post.input';

@InputType()
export class FacebookPageUpdateOneRequiredWithoutFacebookPagePostNestedInput {

    @Field(() => FacebookPageCreateWithoutFacebookPagePostInput, {nullable:true})
    @Type(() => FacebookPageCreateWithoutFacebookPagePostInput)
    create?: FacebookPageCreateWithoutFacebookPagePostInput;

    @Field(() => FacebookPageCreateOrConnectWithoutFacebookPagePostInput, {nullable:true})
    @Type(() => FacebookPageCreateOrConnectWithoutFacebookPagePostInput)
    connectOrCreate?: FacebookPageCreateOrConnectWithoutFacebookPagePostInput;

    @Field(() => FacebookPageUpsertWithoutFacebookPagePostInput, {nullable:true})
    @Type(() => FacebookPageUpsertWithoutFacebookPagePostInput)
    upsert?: FacebookPageUpsertWithoutFacebookPagePostInput;

    @Field(() => FacebookPageWhereUniqueInput, {nullable:true})
    @Type(() => FacebookPageWhereUniqueInput)
    connect?: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => FacebookPageUpdateToOneWithWhereWithoutFacebookPagePostInput, {nullable:true})
    @Type(() => FacebookPageUpdateToOneWithWhereWithoutFacebookPagePostInput)
    update?: FacebookPageUpdateToOneWithWhereWithoutFacebookPagePostInput;
}

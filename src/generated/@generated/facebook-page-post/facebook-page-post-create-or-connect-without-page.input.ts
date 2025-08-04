import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookPagePostCreateWithoutPageInput } from './facebook-page-post-create-without-page.input';

@InputType()
export class FacebookPagePostCreateOrConnectWithoutPageInput {

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPagePostWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;

    @Field(() => FacebookPagePostCreateWithoutPageInput, {nullable:false})
    @Type(() => FacebookPagePostCreateWithoutPageInput)
    create!: FacebookPagePostCreateWithoutPageInput;
}

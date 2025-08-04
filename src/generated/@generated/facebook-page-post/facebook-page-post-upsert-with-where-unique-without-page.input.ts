import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookPagePostUpdateWithoutPageInput } from './facebook-page-post-update-without-page.input';
import { FacebookPagePostCreateWithoutPageInput } from './facebook-page-post-create-without-page.input';

@InputType()
export class FacebookPagePostUpsertWithWhereUniqueWithoutPageInput {

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPagePostWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;

    @Field(() => FacebookPagePostUpdateWithoutPageInput, {nullable:false})
    @Type(() => FacebookPagePostUpdateWithoutPageInput)
    update!: FacebookPagePostUpdateWithoutPageInput;

    @Field(() => FacebookPagePostCreateWithoutPageInput, {nullable:false})
    @Type(() => FacebookPagePostCreateWithoutPageInput)
    create!: FacebookPagePostCreateWithoutPageInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookPagePostCreateInput } from './facebook-page-post-create.input';
import { FacebookPagePostUpdateInput } from './facebook-page-post-update.input';

@ArgsType()
export class UpsertOneFacebookPagePostArgs {

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPagePostWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;

    @Field(() => FacebookPagePostCreateInput, {nullable:false})
    @Type(() => FacebookPagePostCreateInput)
    create!: FacebookPagePostCreateInput;

    @Field(() => FacebookPagePostUpdateInput, {nullable:false})
    @Type(() => FacebookPagePostUpdateInput)
    update!: FacebookPagePostUpdateInput;
}

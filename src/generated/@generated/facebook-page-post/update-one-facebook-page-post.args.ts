import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostUpdateInput } from './facebook-page-post-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';

@ArgsType()
export class UpdateOneFacebookPagePostArgs {

    @Field(() => FacebookPagePostUpdateInput, {nullable:false})
    @Type(() => FacebookPagePostUpdateInput)
    data!: FacebookPagePostUpdateInput;

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPagePostWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;
}

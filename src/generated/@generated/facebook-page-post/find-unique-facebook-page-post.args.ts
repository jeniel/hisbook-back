import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFacebookPagePostArgs {

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPagePostWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;
}

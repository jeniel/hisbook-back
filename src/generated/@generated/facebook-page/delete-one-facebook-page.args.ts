import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFacebookPageArgs {

    @Field(() => FacebookPageWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPageWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;
}

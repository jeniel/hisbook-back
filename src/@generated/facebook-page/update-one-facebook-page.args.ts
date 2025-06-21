import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageUpdateInput } from './facebook-page-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';

@ArgsType()
export class UpdateOneFacebookPageArgs {

    @Field(() => FacebookPageUpdateInput, {nullable:false})
    @Type(() => FacebookPageUpdateInput)
    data!: FacebookPageUpdateInput;

    @Field(() => FacebookPageWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPageWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;
}

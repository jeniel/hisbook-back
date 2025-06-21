import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookPageCreateInput } from './facebook-page-create.input';
import { FacebookPageUpdateInput } from './facebook-page-update.input';

@ArgsType()
export class UpsertOneFacebookPageArgs {

    @Field(() => FacebookPageWhereUniqueInput, {nullable:false})
    @Type(() => FacebookPageWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => FacebookPageCreateInput, {nullable:false})
    @Type(() => FacebookPageCreateInput)
    create!: FacebookPageCreateInput;

    @Field(() => FacebookPageUpdateInput, {nullable:false})
    @Type(() => FacebookPageUpdateInput)
    update!: FacebookPageUpdateInput;
}

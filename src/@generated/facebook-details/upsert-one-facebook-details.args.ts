import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookDetailsWhereUniqueInput } from './facebook-details-where-unique.input';
import { Type } from 'class-transformer';
import { FacebookDetailsCreateInput } from './facebook-details-create.input';
import { FacebookDetailsUpdateInput } from './facebook-details-update.input';

@ArgsType()
export class UpsertOneFacebookDetailsArgs {

    @Field(() => FacebookDetailsWhereUniqueInput, {nullable:false})
    @Type(() => FacebookDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookDetailsWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => FacebookDetailsCreateInput, {nullable:false})
    @Type(() => FacebookDetailsCreateInput)
    create!: FacebookDetailsCreateInput;

    @Field(() => FacebookDetailsUpdateInput, {nullable:false})
    @Type(() => FacebookDetailsUpdateInput)
    update!: FacebookDetailsUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsUpdateInput } from './facebook-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FacebookDetailsWhereUniqueInput } from './facebook-details-where-unique.input';

@ArgsType()
export class UpdateOneFacebookDetailsArgs {

    @Field(() => FacebookDetailsUpdateInput, {nullable:false})
    @Type(() => FacebookDetailsUpdateInput)
    data!: FacebookDetailsUpdateInput;

    @Field(() => FacebookDetailsWhereUniqueInput, {nullable:false})
    @Type(() => FacebookDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookDetailsWhereUniqueInput, 'id' | 'fbId'>;
}

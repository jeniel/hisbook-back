import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacebookDetailsWhereUniqueInput } from './facebook-details-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFacebookDetailsOrThrowArgs {

    @Field(() => FacebookDetailsWhereUniqueInput, {nullable:false})
    @Type(() => FacebookDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<FacebookDetailsWhereUniqueInput, 'id' | 'fbId'>;
}

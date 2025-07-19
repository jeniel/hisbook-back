import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsUpdateInput } from './keywords-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';

@ArgsType()
export class UpdateOnekeywordsArgs {

    @Field(() => keywordsUpdateInput, {nullable:false})
    @Type(() => keywordsUpdateInput)
    data!: keywordsUpdateInput;

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword_tenantId'>;
}

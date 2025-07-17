import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Type } from 'class-transformer';
import { keywordsCreateInput } from './keywords-create.input';
import { keywordsUpdateInput } from './keywords-update.input';

@ArgsType()
export class UpsertOnekeywordsArgs {

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>;

    @Field(() => keywordsCreateInput, {nullable:false})
    @Type(() => keywordsCreateInput)
    create!: keywordsCreateInput;

    @Field(() => keywordsUpdateInput, {nullable:false})
    @Type(() => keywordsUpdateInput)
    update!: keywordsUpdateInput;
}

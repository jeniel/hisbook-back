import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquekeywordsArgs {

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>;
}

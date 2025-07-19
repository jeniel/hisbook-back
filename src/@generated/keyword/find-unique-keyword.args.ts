import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueKeywordArgs {

    @Field(() => KeywordWhereUniqueInput, {nullable:false})
    @Type(() => KeywordWhereUniqueInput)
    where!: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;
}

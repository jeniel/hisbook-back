import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordUpdateInput } from './keyword-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';

@ArgsType()
export class UpdateOneKeywordArgs {

    @Field(() => KeywordUpdateInput, {nullable:false})
    @Type(() => KeywordUpdateInput)
    data!: KeywordUpdateInput;

    @Field(() => KeywordWhereUniqueInput, {nullable:false})
    @Type(() => KeywordWhereUniqueInput)
    where!: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;
}

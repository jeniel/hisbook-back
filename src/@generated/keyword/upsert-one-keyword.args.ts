import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Type } from 'class-transformer';
import { KeywordCreateInput } from './keyword-create.input';
import { KeywordUpdateInput } from './keyword-update.input';

@ArgsType()
export class UpsertOneKeywordArgs {

    @Field(() => KeywordWhereUniqueInput, {nullable:false})
    @Type(() => KeywordWhereUniqueInput)
    where!: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => KeywordCreateInput, {nullable:false})
    @Type(() => KeywordCreateInput)
    create!: KeywordCreateInput;

    @Field(() => KeywordUpdateInput, {nullable:false})
    @Type(() => KeywordUpdateInput)
    update!: KeywordUpdateInput;
}

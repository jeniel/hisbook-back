import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordUpdateManyMutationInput } from './keyword-update-many-mutation.input';
import { Type } from 'class-transformer';
import { KeywordWhereInput } from './keyword-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyKeywordArgs {

    @Field(() => KeywordUpdateManyMutationInput, {nullable:false})
    @Type(() => KeywordUpdateManyMutationInput)
    data!: KeywordUpdateManyMutationInput;

    @Field(() => KeywordWhereInput, {nullable:true})
    @Type(() => KeywordWhereInput)
    where?: KeywordWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

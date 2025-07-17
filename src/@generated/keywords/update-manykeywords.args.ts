import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsUpdateManyMutationInput } from './keywords-update-many-mutation.input';
import { Type } from 'class-transformer';
import { keywordsWhereInput } from './keywords-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManykeywordsArgs {

    @Field(() => keywordsUpdateManyMutationInput, {nullable:false})
    @Type(() => keywordsUpdateManyMutationInput)
    data!: keywordsUpdateManyMutationInput;

    @Field(() => keywordsWhereInput, {nullable:true})
    @Type(() => keywordsWhereInput)
    where?: keywordsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

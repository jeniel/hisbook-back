import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsWhereInput } from './keywords-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManykeywordsArgs {

    @Field(() => keywordsWhereInput, {nullable:true})
    @Type(() => keywordsWhereInput)
    where?: keywordsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

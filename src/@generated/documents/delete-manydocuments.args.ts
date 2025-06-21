import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsWhereInput } from './documents-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManydocumentsArgs {

    @Field(() => documentsWhereInput, {nullable:true})
    @Type(() => documentsWhereInput)
    where?: documentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

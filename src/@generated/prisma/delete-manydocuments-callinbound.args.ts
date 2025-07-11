import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundWhereInput } from '../documents-callinbound/documents-callinbound-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManydocumentsCallinboundArgs {

    @Field(() => documents_callinboundWhereInput, {nullable:true})
    @Type(() => documents_callinboundWhereInput)
    where?: documents_callinboundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoWhereInput } from '../documents-demo/documents-demo-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManydocumentsDemoArgs {

    @Field(() => documents_demoWhereInput, {nullable:true})
    @Type(() => documents_demoWhereInput)
    where?: documents_demoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

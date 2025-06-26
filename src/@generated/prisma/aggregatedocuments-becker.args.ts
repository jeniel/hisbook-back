import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerWhereInput } from '../documents-becker/documents-becker-where.input';
import { Type } from 'class-transformer';
import { documents_beckerOrderByWithRelationInput } from '../documents-becker/documents-becker-order-by-with-relation.input';
import { documents_beckerWhereUniqueInput } from '../documents-becker/documents-becker-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedocumentsBeckerArgs {

    @Field(() => documents_beckerWhereInput, {nullable:true})
    @Type(() => documents_beckerWhereInput)
    where?: documents_beckerWhereInput;

    @Field(() => [documents_beckerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<documents_beckerOrderByWithRelationInput>;

    @Field(() => documents_beckerWhereUniqueInput, {nullable:true})
    cursor?: documents_beckerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

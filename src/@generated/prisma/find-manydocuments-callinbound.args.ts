import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundWhereInput } from '../documents-callinbound/documents-callinbound-where.input';
import { Type } from 'class-transformer';
import { documents_callinboundOrderByWithRelationInput } from '../documents-callinbound/documents-callinbound-order-by-with-relation.input';
import { documents_callinboundWhereUniqueInput } from '../documents-callinbound/documents-callinbound-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Documents_callinboundScalarFieldEnum } from './documents-callinbound-scalar-field.enum';

@ArgsType()
export class FindManydocumentsCallinboundArgs {

    @Field(() => documents_callinboundWhereInput, {nullable:true})
    @Type(() => documents_callinboundWhereInput)
    where?: documents_callinboundWhereInput;

    @Field(() => [documents_callinboundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<documents_callinboundOrderByWithRelationInput>;

    @Field(() => documents_callinboundWhereUniqueInput, {nullable:true})
    cursor?: documents_callinboundWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Documents_callinboundScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Documents_callinboundScalarFieldEnum}`>;
}

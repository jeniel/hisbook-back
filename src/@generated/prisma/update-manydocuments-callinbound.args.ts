import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundUpdateManyMutationInput } from '../documents-callinbound/documents-callinbound-update-many-mutation.input';
import { Type } from 'class-transformer';
import { documents_callinboundWhereInput } from '../documents-callinbound/documents-callinbound-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManydocumentsCallinboundArgs {

    @Field(() => documents_callinboundUpdateManyMutationInput, {nullable:false})
    @Type(() => documents_callinboundUpdateManyMutationInput)
    data!: documents_callinboundUpdateManyMutationInput;

    @Field(() => documents_callinboundWhereInput, {nullable:true})
    @Type(() => documents_callinboundWhereInput)
    where?: documents_callinboundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

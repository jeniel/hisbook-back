import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoUpdateManyMutationInput } from '../documents-demo/documents-demo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { documents_demoWhereInput } from '../documents-demo/documents-demo-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManydocumentsDemoArgs {

    @Field(() => documents_demoUpdateManyMutationInput, {nullable:false})
    @Type(() => documents_demoUpdateManyMutationInput)
    data!: documents_demoUpdateManyMutationInput;

    @Field(() => documents_demoWhereInput, {nullable:true})
    @Type(() => documents_demoWhereInput)
    where?: documents_demoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

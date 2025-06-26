import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerUpdateManyMutationInput } from '../documents-becker/documents-becker-update-many-mutation.input';
import { Type } from 'class-transformer';
import { documents_beckerWhereInput } from '../documents-becker/documents-becker-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManydocumentsBeckerArgs {

    @Field(() => documents_beckerUpdateManyMutationInput, {nullable:false})
    @Type(() => documents_beckerUpdateManyMutationInput)
    data!: documents_beckerUpdateManyMutationInput;

    @Field(() => documents_beckerWhereInput, {nullable:true})
    @Type(() => documents_beckerWhereInput)
    where?: documents_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

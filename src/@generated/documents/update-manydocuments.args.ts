import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsUpdateManyMutationInput } from './documents-update-many-mutation.input';
import { Type } from 'class-transformer';
import { documentsWhereInput } from './documents-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManydocumentsArgs {

    @Field(() => documentsUpdateManyMutationInput, {nullable:false})
    @Type(() => documentsUpdateManyMutationInput)
    data!: documentsUpdateManyMutationInput;

    @Field(() => documentsWhereInput, {nullable:true})
    @Type(() => documentsWhereInput)
    where?: documentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

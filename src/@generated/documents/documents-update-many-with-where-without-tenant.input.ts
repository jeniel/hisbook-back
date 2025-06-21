import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsScalarWhereInput } from './documents-scalar-where.input';
import { Type } from 'class-transformer';
import { documentsUpdateManyMutationInput } from './documents-update-many-mutation.input';

@InputType()
export class documentsUpdateManyWithWhereWithoutTenantInput {

    @Field(() => documentsScalarWhereInput, {nullable:false})
    @Type(() => documentsScalarWhereInput)
    where!: documentsScalarWhereInput;

    @Field(() => documentsUpdateManyMutationInput, {nullable:false})
    @Type(() => documentsUpdateManyMutationInput)
    data!: documentsUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsScalarWhereInput } from './keywords-scalar-where.input';
import { Type } from 'class-transformer';
import { keywordsUpdateManyMutationInput } from './keywords-update-many-mutation.input';

@InputType()
export class keywordsUpdateManyWithWhereWithoutTenantInput {

    @Field(() => keywordsScalarWhereInput, {nullable:false})
    @Type(() => keywordsScalarWhereInput)
    where!: keywordsScalarWhereInput;

    @Field(() => keywordsUpdateManyMutationInput, {nullable:false})
    @Type(() => keywordsUpdateManyMutationInput)
    data!: keywordsUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KeywordScalarWhereInput } from './keyword-scalar-where.input';
import { Type } from 'class-transformer';
import { KeywordUpdateManyMutationInput } from './keyword-update-many-mutation.input';

@InputType()
export class KeywordUpdateManyWithWhereWithoutTenantInput {

    @Field(() => KeywordScalarWhereInput, {nullable:false})
    @Type(() => KeywordScalarWhereInput)
    where!: KeywordScalarWhereInput;

    @Field(() => KeywordUpdateManyMutationInput, {nullable:false})
    @Type(() => KeywordUpdateManyMutationInput)
    data!: KeywordUpdateManyMutationInput;
}

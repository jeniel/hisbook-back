import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignScalarWhereInput } from './vital-sign-scalar-where.input';
import { Type } from 'class-transformer';
import { VitalSignUpdateManyMutationInput } from './vital-sign-update-many-mutation.input';

@InputType()
export class VitalSignUpdateManyWithWhereWithoutCaseInput {

    @Field(() => VitalSignScalarWhereInput, {nullable:false})
    @Type(() => VitalSignScalarWhereInput)
    where!: VitalSignScalarWhereInput;

    @Field(() => VitalSignUpdateManyMutationInput, {nullable:false})
    @Type(() => VitalSignUpdateManyMutationInput)
    data!: VitalSignUpdateManyMutationInput;
}

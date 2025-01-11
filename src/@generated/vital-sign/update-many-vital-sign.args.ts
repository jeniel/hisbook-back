import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignUpdateManyMutationInput } from './vital-sign-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VitalSignWhereInput } from './vital-sign-where.input';

@ArgsType()
export class UpdateManyVitalSignArgs {

    @Field(() => VitalSignUpdateManyMutationInput, {nullable:false})
    @Type(() => VitalSignUpdateManyMutationInput)
    data!: VitalSignUpdateManyMutationInput;

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    where?: VitalSignWhereInput;
}

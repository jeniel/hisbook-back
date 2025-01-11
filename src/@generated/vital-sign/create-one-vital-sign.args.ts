import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignCreateInput } from './vital-sign-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVitalSignArgs {

    @Field(() => VitalSignCreateInput, {nullable:false})
    @Type(() => VitalSignCreateInput)
    data!: VitalSignCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignCreateManyInput } from './vital-sign-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVitalSignArgs {

    @Field(() => [VitalSignCreateManyInput], {nullable:false})
    @Type(() => VitalSignCreateManyInput)
    data!: Array<VitalSignCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

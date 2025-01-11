import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignCreateManyCaseInput } from './vital-sign-create-many-case.input';
import { Type } from 'class-transformer';

@InputType()
export class VitalSignCreateManyCaseInputEnvelope {

    @Field(() => [VitalSignCreateManyCaseInput], {nullable:false})
    @Type(() => VitalSignCreateManyCaseInput)
    data!: Array<VitalSignCreateManyCaseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';
import { Type } from 'class-transformer';
import { CaseUpdateWithoutVitalSignInput } from './case-update-without-vital-sign.input';

@InputType()
export class CaseUpdateToOneWithWhereWithoutVitalSignInput {

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;

    @Field(() => CaseUpdateWithoutVitalSignInput, {nullable:false})
    @Type(() => CaseUpdateWithoutVitalSignInput)
    data!: CaseUpdateWithoutVitalSignInput;
}

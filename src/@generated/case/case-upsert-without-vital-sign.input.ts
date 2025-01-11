import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseUpdateWithoutVitalSignInput } from './case-update-without-vital-sign.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutVitalSignInput } from './case-create-without-vital-sign.input';
import { CaseWhereInput } from './case-where.input';

@InputType()
export class CaseUpsertWithoutVitalSignInput {

    @Field(() => CaseUpdateWithoutVitalSignInput, {nullable:false})
    @Type(() => CaseUpdateWithoutVitalSignInput)
    update!: CaseUpdateWithoutVitalSignInput;

    @Field(() => CaseCreateWithoutVitalSignInput, {nullable:false})
    @Type(() => CaseCreateWithoutVitalSignInput)
    create!: CaseCreateWithoutVitalSignInput;

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;
}

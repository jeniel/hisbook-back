import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignWhereInput } from './vital-sign-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVitalSignArgs {

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    where?: VitalSignWhereInput;
}

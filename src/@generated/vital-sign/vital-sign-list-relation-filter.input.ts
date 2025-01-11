import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignWhereInput } from './vital-sign-where.input';
import { Type } from 'class-transformer';

@InputType()
export class VitalSignListRelationFilter {

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    every?: VitalSignWhereInput;

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    some?: VitalSignWhereInput;

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    none?: VitalSignWhereInput;
}

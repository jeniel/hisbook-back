import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PatientCount {

    @Field(() => Int, {nullable:false})
    case?: number;
}

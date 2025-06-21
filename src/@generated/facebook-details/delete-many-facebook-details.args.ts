import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsWhereInput } from './facebook-details-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFacebookDetailsArgs {

    @Field(() => FacebookDetailsWhereInput, {nullable:true})
    @Type(() => FacebookDetailsWhereInput)
    where?: FacebookDetailsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

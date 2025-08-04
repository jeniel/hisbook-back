import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFacebookPageArgs {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

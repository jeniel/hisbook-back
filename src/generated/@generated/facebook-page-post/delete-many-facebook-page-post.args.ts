import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFacebookPagePostArgs {

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    @Type(() => FacebookPagePostWhereInput)
    where?: FacebookPagePostWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

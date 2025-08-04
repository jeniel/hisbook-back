import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageUpdateManyMutationInput } from './facebook-page-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFacebookPageArgs {

    @Field(() => FacebookPageUpdateManyMutationInput, {nullable:false})
    @Type(() => FacebookPageUpdateManyMutationInput)
    data!: FacebookPageUpdateManyMutationInput;

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

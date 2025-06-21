import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostUpdateManyMutationInput } from './facebook-page-post-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFacebookPagePostArgs {

    @Field(() => FacebookPagePostUpdateManyMutationInput, {nullable:false})
    @Type(() => FacebookPagePostUpdateManyMutationInput)
    data!: FacebookPagePostUpdateManyMutationInput;

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    @Type(() => FacebookPagePostWhereInput)
    where?: FacebookPagePostWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsUpdateManyMutationInput } from './facebook-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacebookDetailsWhereInput } from './facebook-details-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFacebookDetailsArgs {

    @Field(() => FacebookDetailsUpdateManyMutationInput, {nullable:false})
    @Type(() => FacebookDetailsUpdateManyMutationInput)
    data!: FacebookDetailsUpdateManyMutationInput;

    @Field(() => FacebookDetailsWhereInput, {nullable:true})
    @Type(() => FacebookDetailsWhereInput)
    where?: FacebookDetailsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

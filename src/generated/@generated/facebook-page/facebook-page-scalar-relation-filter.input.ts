import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';

@InputType()
export class FacebookPageScalarRelationFilter {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    is?: FacebookPageWhereInput;

    @Field(() => FacebookPageWhereInput, {nullable:true})
    isNot?: FacebookPageWhereInput;
}

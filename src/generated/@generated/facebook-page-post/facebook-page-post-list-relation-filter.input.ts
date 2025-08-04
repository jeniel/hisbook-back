import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';

@InputType()
export class FacebookPagePostListRelationFilter {

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    every?: FacebookPagePostWhereInput;

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    some?: FacebookPagePostWhereInput;

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    none?: FacebookPagePostWhereInput;
}

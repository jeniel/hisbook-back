import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FacebookPage } from '../facebook-page/facebook-page.model';

@ObjectType()
export class FacebookPagePost {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => Date, {nullable:true})
    createdTime!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => FacebookPage, {nullable:false})
    page?: FacebookPage;
}

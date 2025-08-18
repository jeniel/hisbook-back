import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Images } from '../images/images.model';
import { User } from '../user/user.model';
import { PostsCount } from './posts-count.output';

@ObjectType()
export class Posts {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    datePosted!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => [Images], {nullable:true})
    images?: Array<Images>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => PostsCount, {nullable:false})
    _count?: PostsCount;
}

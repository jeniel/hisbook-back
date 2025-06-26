import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { documents } from '../documents/documents.model';
import { User } from '../user/user.model';
import { TenantCount } from './tenant-count.output';

@ObjectType()
export class Tenant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isApprove!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    nanoid!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [documents], {nullable:true})
    documents?: Array<documents>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => TenantCount, {nullable:false})
    _count?: TenantCount;
}

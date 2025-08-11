import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { Posts } from '../posts/posts.model';
import { Department } from '../department/department.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {description:'@Validator.@IsEmail()',nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @HideField()
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isApprove!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => [Role], {nullable:true})
    role!: Array<`${Role}`>;

    @Field(() => String, {nullable:true})
    departmentId!: string | null;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => [Posts], {nullable:true})
    posts?: Array<Posts>;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

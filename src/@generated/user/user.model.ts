import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @HideField()
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken!: string | null;

    @Field(() => [Role], {nullable:true})
    role!: Array<keyof typeof Role>;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isApprove!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;
}

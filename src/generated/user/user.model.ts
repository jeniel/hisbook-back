import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { Posts } from '../posts/posts.model';
import { MissedLogoutTicket } from '../missed-logout-ticket/missed-logout-ticket.model';
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

    @Field(() => [Role], {nullable:true})
    role!: Array<`${Role}`>;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => [Posts], {nullable:true})
    posts?: Array<Posts>;

    @Field(() => [MissedLogoutTicket], {nullable:true})
    MissedLogoutTicket?: Array<MissedLogoutTicket>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

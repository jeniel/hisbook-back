import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { Posts } from '../posts/posts.model';
import { Ticket } from '../ticket/ticket.model';
import { AuditLog } from '../audit-log/audit-log.model';
import { Department } from '../department/department.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {description:'@Validator.@IsEmail()',nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:false})
    username!: string;

    @HideField()
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [Role], {nullable:true})
    role!: Array<`${Role}`>;

    @Field(() => String, {nullable:true})
    departmentId!: string | null;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => [Posts], {nullable:true})
    posts?: Array<Posts>;

    @Field(() => [Ticket], {nullable:true})
    tickets?: Array<Ticket>;

    @Field(() => [AuditLog], {nullable:true})
    auditLogs?: Array<AuditLog>;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

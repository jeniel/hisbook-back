import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { Profile } from '../profile/profile.model';
import { Comment } from '../comment/comment.model';
import { TicketTransactionCount } from './ticket-transaction-count.output';

@ObjectType()
export class TicketTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => TicketStatus, {nullable:true,defaultValue:'OPEN'})
    status!: keyof typeof TicketStatus | null;

    @Field(() => TicketPriority, {nullable:true,defaultValue:'LOW'})
    priority!: keyof typeof TicketPriority | null;

    @Field(() => String, {nullable:true})
    type!: string | null;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => String, {nullable:true})
    subCategory!: string | null;

    @Field(() => String, {nullable:true})
    departmentFrom!: string | null;

    @Field(() => String, {nullable:true})
    departmentTo!: string | null;

    @Field(() => String, {nullable:true})
    profileId!: string | null;

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

    @Field(() => [Comment], {nullable:true})
    comment?: Array<Comment>;

    @Field(() => TicketTransactionCount, {nullable:false})
    _count?: TicketTransactionCount;
}

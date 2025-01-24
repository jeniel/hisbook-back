import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { Comment } from '../comment/comment.model';
import { Profile } from '../profile/profile.model';
import { Department } from '../department/department.model';
import { TicketCategory } from '../ticket-category/ticket-category.model';
import { TicketTransactionCount } from './ticket-transaction-count.output';

@ObjectType()
export class TicketTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    ticketNumber!: string | null;

    @Field(() => TicketStatus, {nullable:true,defaultValue:'OPEN'})
    status!: keyof typeof TicketStatus | null;

    @Field(() => TicketPriority, {nullable:true,defaultValue:'LOW'})
    priority!: keyof typeof TicketPriority | null;

    @Field(() => String, {nullable:true})
    departmentFrom!: string | null;

    @Field(() => String, {nullable:true})
    departmentTo!: string | null;

    @Field(() => String, {nullable:true})
    ticketCreatedBy!: string | null;

    @Field(() => String, {nullable:true})
    ticketAssignedTo!: string | null;

    @Field(() => String, {nullable:true})
    ticketAssignedBy!: string | null;

    @Field(() => String, {nullable:true})
    ticketCategoryId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => [Comment], {nullable:true})
    comment?: Array<Comment>;

    @Field(() => Profile, {nullable:true})
    createdByProfile?: Profile | null;

    @Field(() => Profile, {nullable:true})
    assignedToProfile?: Profile | null;

    @Field(() => Profile, {nullable:true})
    assignedByProfile?: Profile | null;

    @Field(() => Department, {nullable:true})
    fromDepartment?: Department | null;

    @Field(() => Department, {nullable:true})
    toDepartment?: Department | null;

    @Field(() => TicketCategory, {nullable:true})
    ticketCategory?: TicketCategory | null;

    @Field(() => TicketTransactionCount, {nullable:false})
    _count?: TicketTransactionCount;
}

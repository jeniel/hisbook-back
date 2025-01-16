import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateNestedOneWithoutCommentInput } from '../ticket-transaction/ticket-transaction-create-nested-one-without-comment.input';
import { ProfileCreateNestedOneWithoutCommentInput } from '../profile/profile-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => TicketTransactionCreateNestedOneWithoutCommentInput, {nullable:false})
    ticket!: TicketTransactionCreateNestedOneWithoutCommentInput;

    @Field(() => ProfileCreateNestedOneWithoutCommentInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutCommentInput;
}

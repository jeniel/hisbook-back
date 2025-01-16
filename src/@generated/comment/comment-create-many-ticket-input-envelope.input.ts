import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyTicketInput } from './comment-create-many-ticket.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyTicketInputEnvelope {

    @Field(() => [CommentCreateManyTicketInput], {nullable:false})
    @Type(() => CommentCreateManyTicketInput)
    data!: Array<CommentCreateManyTicketInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

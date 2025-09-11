import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyCreatedByInput } from './ticket-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyCreatedByInputEnvelope {

    @Field(() => [TicketCreateManyCreatedByInput], {nullable:false})
    @Type(() => TicketCreateManyCreatedByInput)
    data!: Array<TicketCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

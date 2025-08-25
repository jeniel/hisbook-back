import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateManyTicketInput } from './audit-log-create-many-ticket.input';
import { Type } from 'class-transformer';

@InputType()
export class AuditLogCreateManyTicketInputEnvelope {

    @Field(() => [AuditLogCreateManyTicketInput], {nullable:false})
    @Type(() => AuditLogCreateManyTicketInput)
    data!: Array<AuditLogCreateManyTicketInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

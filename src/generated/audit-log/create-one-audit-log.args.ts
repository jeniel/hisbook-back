import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogCreateInput } from './audit-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAuditLogArgs {

    @Field(() => AuditLogCreateInput, {nullable:true})
    @Type(() => AuditLogCreateInput)
    data?: AuditLogCreateInput;
}

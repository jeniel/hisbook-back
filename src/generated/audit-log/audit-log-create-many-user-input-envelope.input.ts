import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateManyUserInput } from './audit-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AuditLogCreateManyUserInputEnvelope {

    @Field(() => [AuditLogCreateManyUserInput], {nullable:false})
    @Type(() => AuditLogCreateManyUserInput)
    data!: Array<AuditLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogCreateManyInput } from './audit-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAuditLogArgs {

    @Field(() => [AuditLogCreateManyInput], {nullable:false})
    @Type(() => AuditLogCreateManyInput)
    data!: Array<AuditLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

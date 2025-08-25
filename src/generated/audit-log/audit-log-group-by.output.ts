import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuditLogCountAggregate } from './audit-log-count-aggregate.output';
import { AuditLogMinAggregate } from './audit-log-min-aggregate.output';
import { AuditLogMaxAggregate } from './audit-log-max-aggregate.output';

@ObjectType()
export class AuditLogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => Date, {nullable:false})
    timestamp!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    ticketId?: string;

    @Field(() => AuditLogCountAggregate, {nullable:true})
    _count?: AuditLogCountAggregate;

    @Field(() => AuditLogMinAggregate, {nullable:true})
    _min?: AuditLogMinAggregate;

    @Field(() => AuditLogMaxAggregate, {nullable:true})
    _max?: AuditLogMaxAggregate;
}

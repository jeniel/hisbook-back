import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuditLogCountAggregate } from './audit-log-count-aggregate.output';
import { AuditLogMinAggregate } from './audit-log-min-aggregate.output';
import { AuditLogMaxAggregate } from './audit-log-max-aggregate.output';

@ObjectType()
export class AggregateAuditLog {

    @Field(() => AuditLogCountAggregate, {nullable:true})
    _count?: AuditLogCountAggregate;

    @Field(() => AuditLogMinAggregate, {nullable:true})
    _min?: AuditLogMinAggregate;

    @Field(() => AuditLogMaxAggregate, {nullable:true})
    _max?: AuditLogMaxAggregate;
}

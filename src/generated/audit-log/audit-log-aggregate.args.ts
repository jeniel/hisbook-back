import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogWhereInput } from './audit-log-where.input';
import { Type } from 'class-transformer';
import { AuditLogOrderByWithRelationInput } from './audit-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuditLogCountAggregateInput } from './audit-log-count-aggregate.input';
import { AuditLogMinAggregateInput } from './audit-log-min-aggregate.input';
import { AuditLogMaxAggregateInput } from './audit-log-max-aggregate.input';

@ArgsType()
export class AuditLogAggregateArgs {

    @Field(() => AuditLogWhereInput, {nullable:true})
    @Type(() => AuditLogWhereInput)
    where?: AuditLogWhereInput;

    @Field(() => [AuditLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuditLogOrderByWithRelationInput>;

    @Field(() => AuditLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuditLogCountAggregateInput, {nullable:true})
    _count?: AuditLogCountAggregateInput;

    @Field(() => AuditLogMinAggregateInput, {nullable:true})
    _min?: AuditLogMinAggregateInput;

    @Field(() => AuditLogMaxAggregateInput, {nullable:true})
    _max?: AuditLogMaxAggregateInput;
}

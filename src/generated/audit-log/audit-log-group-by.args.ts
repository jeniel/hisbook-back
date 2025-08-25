import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogWhereInput } from './audit-log-where.input';
import { Type } from 'class-transformer';
import { AuditLogOrderByWithAggregationInput } from './audit-log-order-by-with-aggregation.input';
import { AuditLogScalarFieldEnum } from './audit-log-scalar-field.enum';
import { AuditLogScalarWhereWithAggregatesInput } from './audit-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuditLogCountAggregateInput } from './audit-log-count-aggregate.input';
import { AuditLogMinAggregateInput } from './audit-log-min-aggregate.input';
import { AuditLogMaxAggregateInput } from './audit-log-max-aggregate.input';

@ArgsType()
export class AuditLogGroupByArgs {

    @Field(() => AuditLogWhereInput, {nullable:true})
    @Type(() => AuditLogWhereInput)
    where?: AuditLogWhereInput;

    @Field(() => [AuditLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuditLogOrderByWithAggregationInput>;

    @Field(() => [AuditLogScalarFieldEnum], {nullable:false})
    by!: Array<`${AuditLogScalarFieldEnum}`>;

    @Field(() => AuditLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuditLogScalarWhereWithAggregatesInput;

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

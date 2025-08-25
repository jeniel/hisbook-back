import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MissedLogoutTicketCount {

    @Field(() => Int, {nullable:false})
    auditLogs?: number;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';

@InputType()
export class MissedLogoutTicketNullableScalarRelationFilter {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    is?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    isNot?: MissedLogoutTicketWhereInput;
}

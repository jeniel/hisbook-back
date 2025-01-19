import { registerEnumType } from '@nestjs/graphql';

export enum AgentTransactionScalarFieldEnum {
    id = "id",
    ticketTransactionId = "ticketTransactionId",
    profileId = "profileId"
}


registerEnumType(AgentTransactionScalarFieldEnum, { name: 'AgentTransactionScalarFieldEnum', description: undefined })

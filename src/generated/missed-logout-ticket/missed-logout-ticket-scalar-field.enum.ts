import { registerEnumType } from '@nestjs/graphql';

export enum MissedLogoutTicketScalarFieldEnum {
    id = "id",
    missedAt = "missedAt",
    floor = "floor",
    screenshot = "screenshot",
    status = "status",
    updatedBy = "updatedBy",
    createdAt = "createdAt",
    createdById = "createdById"
}


registerEnumType(MissedLogoutTicketScalarFieldEnum, { name: 'MissedLogoutTicketScalarFieldEnum', description: undefined })

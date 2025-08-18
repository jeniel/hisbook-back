import { registerEnumType } from '@nestjs/graphql';

export enum MissedLogoutTicketScalarFieldEnum {
    id = "id",
    subject = "subject",
    missedAt = "missedAt",
    floor = "floor",
    screenshot = "screenshot",
    status = "status",
    remarks = "remarks",
    updatedBy = "updatedBy",
    createdAt = "createdAt",
    createdById = "createdById"
}


registerEnumType(MissedLogoutTicketScalarFieldEnum, { name: 'MissedLogoutTicketScalarFieldEnum', description: undefined })

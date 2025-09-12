import { registerEnumType } from '@nestjs/graphql';

export enum AuditLogScalarFieldEnum {
    id = "id",
    action = "action",
    remarks = "remarks",
    timestamp = "timestamp",
    updatedBy = "updatedBy",
    userId = "userId",
    ticketId = "ticketId"
}


registerEnumType(AuditLogScalarFieldEnum, { name: 'AuditLogScalarFieldEnum', description: undefined })

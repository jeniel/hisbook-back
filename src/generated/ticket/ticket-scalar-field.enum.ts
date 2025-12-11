import { registerEnumType } from '@nestjs/graphql';

export enum TicketScalarFieldEnum {
    id = "id",
    seq = "seq",
    ticketId = "ticketId",
    subject = "subject",
    missedAt = "missedAt",
    floor = "floor",
    screenshot = "screenshot",
    message = "message",
    serialNumber = "serialNumber",
    status = "status",
    remarks = "remarks",
    createdAt = "createdAt",
    updatedBy = "updatedBy",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    createdById = "createdById",
    departmentId = "departmentId"
}


registerEnumType(TicketScalarFieldEnum, { name: 'TicketScalarFieldEnum', description: undefined })

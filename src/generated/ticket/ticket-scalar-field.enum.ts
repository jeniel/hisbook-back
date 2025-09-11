import { registerEnumType } from '@nestjs/graphql';

export enum TicketScalarFieldEnum {
    id = "id",
    subject = "subject",
    missedAt = "missedAt",
    floor = "floor",
    screenshot = "screenshot",
    message = "message",
    status = "status",
    remarks = "remarks",
    createdAt = "createdAt",
    updatedBy = "updatedBy",
    updatedAt = "updatedAt",
    createdById = "createdById",
    departmentId = "departmentId"
}


registerEnumType(TicketScalarFieldEnum, { name: 'TicketScalarFieldEnum', description: undefined })

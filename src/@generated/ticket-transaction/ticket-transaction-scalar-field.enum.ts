import { registerEnumType } from '@nestjs/graphql';

export enum TicketTransactionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    status = "status",
    priority = "priority",
    departmentFrom = "departmentFrom",
    departmentTo = "departmentTo",
    ticketCreatedBy = "ticketCreatedBy",
    ticketAssignedTo = "ticketAssignedTo",
    ticketCategoryId = "ticketCategoryId",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(TicketTransactionScalarFieldEnum, { name: 'TicketTransactionScalarFieldEnum', description: undefined })

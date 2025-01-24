import { registerEnumType } from '@nestjs/graphql';

export enum TicketTransactionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    ticketNumber = "ticketNumber",
    status = "status",
    priority = "priority",
    departmentFrom = "departmentFrom",
    departmentTo = "departmentTo",
    ticketCreatedBy = "ticketCreatedBy",
    ticketAssignedTo = "ticketAssignedTo",
    ticketAssignedBy = "ticketAssignedBy",
    ticketCategoryId = "ticketCategoryId",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(TicketTransactionScalarFieldEnum, { name: 'TicketTransactionScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum TicketTransactionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    status = "status",
    priority = "priority",
    type = "type",
    category = "category",
    subCategory = "subCategory",
    departmentFrom = "departmentFrom",
    departmentTo = "departmentTo",
    profileId = "profileId",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(TicketTransactionScalarFieldEnum, { name: 'TicketTransactionScalarFieldEnum', description: undefined })

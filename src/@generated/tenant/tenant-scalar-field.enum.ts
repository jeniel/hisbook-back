import { registerEnumType } from '@nestjs/graphql';

export enum TenantScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isActive = "isActive",
    isApprove = "isApprove",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TenantScalarFieldEnum, { name: 'TenantScalarFieldEnum', description: undefined })

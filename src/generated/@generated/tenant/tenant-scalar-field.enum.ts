import { registerEnumType } from '@nestjs/graphql';

export enum TenantScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isActive = "isActive",
    isApprove = "isApprove",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    nanoid = "nanoid",
    slug = "slug",
    chatTableName = "chatTableName",
    documentTableName = "documentTableName",
    collectionName = "collectionName",
    size = "size",
    distance = "distance"
}


registerEnumType(TenantScalarFieldEnum, { name: 'TenantScalarFieldEnum', description: undefined })

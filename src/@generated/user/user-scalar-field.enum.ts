import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    role = "role",
    isActive = "isActive",
    isApprove = "isApprove",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    tenantId = "tenantId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

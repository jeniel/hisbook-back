import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    isActive = "isActive",
    isApprove = "isApprove",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    tenantId = "tenantId",
    role = "role",
    departmentId = "departmentId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

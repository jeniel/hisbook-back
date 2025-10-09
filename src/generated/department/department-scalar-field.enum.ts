import { registerEnumType } from '@nestjs/graphql';

export enum DepartmentScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    deletedAt = "deletedAt",
    isSupport = "isSupport"
}


registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum DepartmentScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt"
}


registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })

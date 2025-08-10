import { registerEnumType } from '@nestjs/graphql';

export enum DepartmentScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    order = "order"
}


registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    middleName = "middleName",
    lastName = "lastName",
    employeeID = "employeeID",
    dateHired = "dateHired",
    birthDate = "birthDate",
    address = "address",
    contact = "contact",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    userId = "userId",
    departmentId = "departmentId"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })

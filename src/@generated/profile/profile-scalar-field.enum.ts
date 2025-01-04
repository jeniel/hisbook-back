import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    firstName = "firstName",
    middleName = "middleName",
    lastName = "lastName",
    designation = "designation",
    employeeID = "employeeID",
    dateHired = "dateHired",
    address = "address",
    contact = "contact",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })

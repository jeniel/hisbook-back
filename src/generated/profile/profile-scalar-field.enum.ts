import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    middleName = "middleName",
    lastName = "lastName",
    birthDate = "birthDate",
    gender = "gender",
    title = "title",
    address = "address",
    contact = "contact",
    avatar = "avatar",
    employeeID = "employeeID",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })

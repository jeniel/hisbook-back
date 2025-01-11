import { registerEnumType } from '@nestjs/graphql';

export enum PatientScalarFieldEnum {
    id = "id",
    pid = "pid",
    firstName = "firstName",
    middleName = "middleName",
    lastName = "lastName",
    birthDate = "birthDate",
    address = "address",
    contact = "contact",
    identification = "identification",
    gender = "gender",
    isDeceased = "isDeceased",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(PatientScalarFieldEnum, { name: 'PatientScalarFieldEnum', description: undefined })

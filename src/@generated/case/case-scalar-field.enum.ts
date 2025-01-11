import { registerEnumType } from '@nestjs/graphql';

export enum CaseScalarFieldEnum {
    id = "id",
    cid = "cid",
    caseNo = "caseNo",
    priceGroup = "priceGroup",
    ageOnReg = "ageOnReg",
    caseStatus = "caseStatus",
    maritalStatus = "maritalStatus",
    patientId = "patientId",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(CaseScalarFieldEnum, { name: 'CaseScalarFieldEnum', description: undefined })

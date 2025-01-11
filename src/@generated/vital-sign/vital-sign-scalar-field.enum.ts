import { registerEnumType } from '@nestjs/graphql';

export enum VitalSignScalarFieldEnum {
    id = "id",
    userId = "userId",
    timestamp = "timestamp",
    heartRate = "heartRate",
    systolicBP = "systolicBP",
    diastolicBP = "diastolicBP",
    temperature = "temperature",
    respiratoryRate = "respiratoryRate",
    oxygenSaturation = "oxygenSaturation",
    caseId = "caseId",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(VitalSignScalarFieldEnum, { name: 'VitalSignScalarFieldEnum', description: undefined })

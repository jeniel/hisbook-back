import { registerEnumType } from '@nestjs/graphql';

export enum ReportScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    keywords = "keywords",
    message_intent = "message_intent",
    tenantId = "tenantId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(ReportScalarFieldEnum, { name: 'ReportScalarFieldEnum', description: undefined })

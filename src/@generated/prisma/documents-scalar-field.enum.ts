import { registerEnumType } from '@nestjs/graphql';

export enum DocumentsScalarFieldEnum {
    client_id = "client_id",
    content = "content",
    metadata = "metadata",
    id = "id",
    tenantId = "tenantId"
}


registerEnumType(DocumentsScalarFieldEnum, { name: 'DocumentsScalarFieldEnum', description: undefined })

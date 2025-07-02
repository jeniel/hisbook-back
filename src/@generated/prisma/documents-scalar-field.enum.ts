import { registerEnumType } from '@nestjs/graphql';

export enum DocumentsScalarFieldEnum {
    content = "content",
    metadata = "metadata",
    tenantId = "tenantId",
    client_id = "client_id",
    id = "id"
}


registerEnumType(DocumentsScalarFieldEnum, { name: 'DocumentsScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum DocumentsScalarFieldEnum {
    id = "id",
    content = "content",
    metadata = "metadata",
    tenantId = "tenantId"
}


registerEnumType(DocumentsScalarFieldEnum, { name: 'DocumentsScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum Documents_demoScalarFieldEnum {
    id = "id",
    content = "content",
    metadata = "metadata",
    created_at = "created_at"
}


registerEnumType(Documents_demoScalarFieldEnum, { name: 'Documents_demoScalarFieldEnum', description: undefined })

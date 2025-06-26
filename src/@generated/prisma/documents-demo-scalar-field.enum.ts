import { registerEnumType } from '@nestjs/graphql';

export enum Documents_demoScalarFieldEnum {
    id = "id",
    content = "content",
    metadata = "metadata"
}


registerEnumType(Documents_demoScalarFieldEnum, { name: 'Documents_demoScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum Documents_beckerScalarFieldEnum {
    id = "id",
    content = "content",
    metadata = "metadata"
}


registerEnumType(Documents_beckerScalarFieldEnum, { name: 'Documents_beckerScalarFieldEnum', description: undefined })

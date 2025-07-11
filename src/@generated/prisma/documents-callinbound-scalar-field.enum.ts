import { registerEnumType } from '@nestjs/graphql';

export enum Documents_callinboundScalarFieldEnum {
    id = "id",
    content = "content",
    metadata = "metadata"
}


registerEnumType(Documents_callinboundScalarFieldEnum, { name: 'Documents_callinboundScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum FacebookPagePostScalarFieldEnum {
    id = "id",
    message = "message",
    createdTime = "createdTime",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    pageId = "pageId"
}


registerEnumType(FacebookPagePostScalarFieldEnum, { name: 'FacebookPagePostScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SubscriptionScalarFieldEnum, { name: 'SubscriptionScalarFieldEnum', description: undefined })

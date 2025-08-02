import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionUsageScalarFieldEnum {
    id = "id",
    subscriptionId = "subscriptionId",
    featureId = "featureId",
    usage = "usage",
    period = "period",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SubscriptionUsageScalarFieldEnum, { name: 'SubscriptionUsageScalarFieldEnum', description: undefined })

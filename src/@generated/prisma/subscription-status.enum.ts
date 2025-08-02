import { registerEnumType } from '@nestjs/graphql';

export enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING"
}


registerEnumType(SubscriptionStatus, { name: 'SubscriptionStatus', description: undefined })

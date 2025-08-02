import { registerEnumType } from '@nestjs/graphql';

export enum BillingCycle {
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}


registerEnumType(BillingCycle, { name: 'BillingCycle', description: undefined })

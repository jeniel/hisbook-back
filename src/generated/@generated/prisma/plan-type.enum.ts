import { registerEnumType } from '@nestjs/graphql';

export enum PlanType {
    STARTER = "STARTER",
    MID = "MID",
    ENTERPRISE = "ENTERPRISE"
}


registerEnumType(PlanType, { name: 'PlanType', description: undefined })

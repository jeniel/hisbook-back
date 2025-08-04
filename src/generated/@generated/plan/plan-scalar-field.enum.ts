import { registerEnumType } from '@nestjs/graphql';

export enum PlanScalarFieldEnum {
    id = "id",
    name = "name",
    displayName = "displayName",
    description = "description",
    price = "price",
    currency = "currency",
    billingCycle = "billingCycle",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlanScalarFieldEnum, { name: 'PlanScalarFieldEnum', description: undefined })
